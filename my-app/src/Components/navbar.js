function Navbar() {
    return (<div className='flex items-center h-14 shadow-lg'>
        <div className='text-3xl ps-2 font-medium'>
            <span>Sequence</span>
        </div>
        <div className='mx-auto space-x-9'>
            <button>Docs</button>
            <button>Blog</button>
            <button>Changelog</button>
        </div>
        <div className='pr-2'>
            <button>Sign In</button>
        </div>
    </div>);
}

export default Navbar;