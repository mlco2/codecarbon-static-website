function Contributor_card({name, job, Organisation, img_path}){
    return (
`   <li>
        <img src=${img_path} alt="" />
        <h3>${name}</h3>
        <p>${job}</p>
        <p>${Organisation} </p>
    </li>
    `)
}

export default Contributor_card;