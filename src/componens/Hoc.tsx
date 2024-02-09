import {FC, useState} from 'react';
import data from '../data/data.json'
import moment from 'moment';

type TypeProps = {
    date: string
    url?: string
}

function DateTime(props:TypeProps) {
    return (
        <p className="date">{props.date}</p>
    )
}

const DateTimePretty = (Component: FC<TypeProps>) => {
    return function(props: TypeProps) {
        const date = props.date

        let needDate = ''

        const momentNow = moment()
        const momentDate = moment(date)

        const minutes = momentNow.diff(momentDate, 'minutes')
        const hours = momentNow.diff(momentDate, 'hours')
        const days = momentNow.diff(momentDate, 'days')

        if (minutes < 60) {
            needDate = `${minutes} минут назад`
        }
        if (minutes >= 60 && hours < 24) {
            needDate = `${hours} часов назад`
        }
        if (hours >= 24) {
            needDate = `${days} дней назад`
        }
        
        return <Component {...props} date={needDate}/>
    }
}

const WithDateTimePretty = DateTimePretty(DateTime)

function Video(props: TypeProps) {
    return (
        <div className="video">
            <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <WithDateTimePretty date={props.date} />
        </div>
    )
}

type TypeVideoList = {
    list: TypeProps[]
}

function VideoList(props: TypeVideoList) {
    return props.list.map((item, index) => <Video key={index} url={item.url} date={item.date} />);
}



export default function Hoc() {
    const [list, _setList] = useState<TypeProps[]>(data);

    return (
        <VideoList list={list} />
    );
}