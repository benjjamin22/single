import artiii from '../../../styles/Article.module.css'


const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <div className={artiii.userprofile}>
      <div className={artiii.profiletop}>
                <img className={artiii.img} src={article.picturepath}alt="picturepath"/>
                <div className={artiii.profileinfo}>
                <div className={artiii.profileinfoo}>
                        <h2 >{article.inName}</h2>  
                        <h1>--{article.reg}--
                        </h1>
                        </div>
                    </div>
                
                </div>
                <div className={artiii.profilebottom}>
                <div className={artiii.school}> 
                <div className={artiii.profileinfo}> 
                <div className={artiii.profileinfooo}>
                                <h1>- EVETTE INST. OF CATERINE -</h1>
                                 <h3>- ACCOUNTANCY DEPARTMENT -</h3>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div className={artiii.profilebottom}>
                    <div className={artiii.flecy}>
                    <div className={artiii.bg}>
                                <h1 >B/G</h1>
                                <div className={artiii.profileinfo}>
                                <h9 >{article.bloodgroup}</h9>
                                </div>
                            </div>
                            <div className={artiii.status}>
                            <h1 >STATUS/VALIDITY</h1>
                            <div className={artiii.profileinfo}>
                            <div className={artiii.col}>
                                    <h1>{article.Status}</h1>
                                    <h4 >- {article.validity} -</h4>
                                </div>
                                </div>
                            </div>

                            <div className={artiii.sex}>
                                <h1 >SEX</h1>
                                <div className={artiii.profileinfo}>
                                <h9 >{article.sex}</h9>
                                </div>
                            </div>
                        </div>
                        <div className={artiii.lga}>
                        <h1>LGA/STATE OF ORIGIN</h1>
                        
                        <div className={artiii.profileinfo}> 
                        <div className={artiii.lgacol}>
                                <h1 >- {article.state} -</h1>
                                <h3>- {article.localgovt} -</h3>
                                </div>
                                 </div>
                            </div>
                        
                            <div className={artiii.bottom}>
                            <div className={artiii.contact}>
                                <h1>CONTACT:</h1>
                                <div className={artiii.profileinfo}>
                                    <a href="Tel:{article.inparentno}">
                                    <div className={artiii.p1}>
                                            <p2>{article.inparentno}</p2>
                                        </div>
                                    </a>                   
                                </div>
                            </div>
                            <div className={artiii.contact}>
                                <h1>EMERGENCY CONTACT:</h1>
                                <div className={artiii.profileinfo}>
                                    <a href="Tel:${user.inparentno2}">
                                    <div className={artiii.p2}>
                                            <p2>{article.inparentno2}</p2>
                                        </div>
                                    </a>                   
                                </div>                           
                            </div>
                        </div>
                    </div>       
                </div>
              
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`http://localhost:8000/nuasa/${context.params.id}` )

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:8000/nuasa/`)

  const articles = await res.json()

  const ids = articles.map((article) => article.id)
 const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default article
