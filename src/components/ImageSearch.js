import React, {useState} from 'react'

export const ImageSearch = ({setSearchTerm}) => {
    const [text, setText] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        setSearchTerm(text);
    };
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form className="w-full max-w-sm" onSubmit={onSubmit}>
                <div className="flex item-center border-b border-b-2 border-teal-500 py-2">
                    <input type="text" onChange={e=> setText(e.target.value)} placeholder="Search for Images" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">Search</button>
                </div>
            </form>
        </div>
    )
}
