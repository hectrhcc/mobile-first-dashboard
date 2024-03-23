import data from '../../data/data.json'
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

const convertNumberToK= (number) =>{
    if(number>10000){
        number=number/1000
        return `${number}k`
    }
    return number
}

export const OverviewContainer = () => {



  return (
    <section className='max-w-[1440px] flex flex-wrap absolute top-[191px] left-0 right-0 mx-auto'>
         {
        data.overview.map(o =>
       
                <OverviewCard 
                key={o.id} 
                user={o.user}
                audienceType={o.audienceType}
                audience={convertNumberToK(o.audience)}
                network={o.network}
                isUp={o.isUp}
                today={o.today}
                />
        )
        }
    </section>
  )
}



console.log(data['overview-today'])

export const OverviewTodayContainer = () => {
  return (
    <section className=''>
        <h2 className='text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-[32px]'>Overview Today</h2>
    <div className='flex flex-wrap'>
        {
        data['overview-today'].map(o=>
            <OverviewTodayCard 
            key={o.id}
            network={o.network}
            statsType={o.statsType}
            stats={convertNumberToK(o.stats)}
            porcentage={o.porcentage}
            isUp={o.isUp}
            />
    )
        }
    </div>
    </section>
  )
}