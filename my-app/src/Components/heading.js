function Heading() {
    return (<div className='grid justify-items-center gap-7 pt-24'>
        <div className='text-1xl text-blue-600'>
            <h4 >Designed for custom contracts and usage-based pricing</h4>
        </div>
        <div className='text-center'>
            <h1 className='text-6xl font-serif tracking-wide font-semibold '>Quote to Revenue,<br /> streamlined</h1>
        </div>
        <div className='text-center'>
            <h3>Custom pricing shouldn’t slow down your revenue operations. B2B companies <br /> of all sizes use Sequence to scale pricing, billing and invoicing workflows.</h3>
        </div>
        <div className='border-2 border-slate-400 rounded-full w-96 h-12 ps-2 items-center'>
            <input type='text' placeholder='Email Address' className='rounded-full w-60 h-10 ps-4' />
            <button className='rounded-full bg-indigo-500 w-28 text-white h-8'>Book Demo</button>

        </div>
    </div>);
}

export default Heading;