import facebookLogo from '../../images/icon-facebook.svg'
import twitterLogo from '../../images/icon-twitter.svg'
import instagramLogo from '../../images/icon-instagram.svg'
import youtubeLogo from '../../images/icon-youtube.svg'
import iconUp from  '../../images/icon-up.svg'
import iconDown from  '../../images/icon-down.svg'


const networkLogos ={
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo    
}

const networkColors ={
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram-Gradient',
    YouTube: 'bg-YouTube' 
}



export const OverviewCard = ({user, audienceType, audience, network, isUp,today}) => {
  return (
    <article className="bg-Light-Grayish-Blue w-[285px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark-brightness-125 lg:w-[240px]">
        <div className={`${networkColors[network]}  h-[4px] mb-8`}></div>
        <div className='flex items-center place-content-center gap-2' >
        <img src={networkLogos[network]} alt={`${network} logo`} />
        <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
        </div>
        <p className='text-[56px] font-bold text-Very-Dark-Blue dark:text-white'>{audience}</p>
        <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6'>{audienceType}</p>
        <div className='flex items-center gap-1 place-content-center'>
        <img src={isUp ? iconUp:iconDown} alt="icono arriba" />

        <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green': 'text-Bright-Red'}`}>{today} Today</p>
        </div>
        <div>

        </div>
    </article>
  )
}



export const OverviewTodayCard = ({network,statsType, stats, porcentage,isUp}) => {
  return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] cursor-pointer hover:brightness-95 dark:bg-Dark-Desaturated-Blue hover:dark:brightness-125 lg:w-[250px]' >
        <div className='flex items-center justify-between'>
            <p className='text-Dark-Grayish-Blue'>{statsType}</p>
            <img src={ networkLogos[network]}  alt='logos de redes'/>
        </div>
        <div className='flex justify-between'>
            <p className='text-[42px] font-bold text-Very-Dark-Blue dark:text-white'>{stats}</p>
            <div className='flex  items-center gap-1 place-content-center '>
        <img src={isUp ? iconUp:iconDown} alt="icono arriba" />
    <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green': 'text-Bright-Red'}`}>{porcentage} Today</p>
    </div>
    </div>
    </article>
)
}