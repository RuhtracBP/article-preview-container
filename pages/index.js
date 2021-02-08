import Head from 'next/head'
//import styles from '../styles/Home.module.css'

const classes = {
  card:       'mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto',
  imgDrawer:  'rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none',
  content:    'bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md'
}


export default function Home() {
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>Article Preview Component</title>
      </Head>
      <div className={classes.card} >
        <img className={classes.imgDrawer} src="/images/drawers.jpg" alt="drawer"/>
        <div className={classes.content}>
          <h2 className="text-gray-700 font-semibold">Shift overall look and fell by adding these wonderful touches to furniture in your home.</h2>
          <p className="text-sm text-gray-400 mt-4">Ever been in a room and felt like something wasa missing? Perhaps ir felt slightly bare and uninviting. I've got some tips to help you make any room feel complete.</p>
          <div className="flex items-center mt-8">
            <div className="flex items-center">
              <img className="h-10 w-10 rounded-full" src="/images/avatar-michelle.jpg" alt="avatar"/>
              <div className="ml-4 ">
                <p className="text-gray-700 text-sm font-semibold">Michelle Appleton</p>
                <p className="text-gray-400 text-sm">28 Jun 2020</p>
              </div>
            </div>
            <div className="w-8 h-8 ml-auto bg-gray-100 rounded-full flex items-center justify-center">
              <img class="" src="/images/icon-share.svg" alt="back arrow"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
