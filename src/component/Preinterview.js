import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Preinterview = ({datainfo, id, cls}) => {
    return (
        <div id={id} className={cls}>
            <h2 className='text-center mt-5 pt-5 fw900'>
                사전인터뷰
            </h2>
            <Accordion defaultActiveKey={0}>
                {
                    datainfo.map((v, i)=> <Accordion.Item eventKey={i}>
                        <Accordion.Header>{v.question}</Accordion.Header>
                        <Accordion.Body>
                            {v.answer.split("|").map((vv, ii)=>{
                                return(
                                    <span className='d-lg-block'>{vv}</span>
                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>)
                }
            </Accordion>
            
        </div>
    );
};

export default Preinterview;