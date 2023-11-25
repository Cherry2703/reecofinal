import {Paragraph2,Paragraph1,ParagraphCont,VerticalLine} from "./styledComponents"

import "./index.css"

const Cart=()=>(
    <div className="cart-data-cont">
        <div className="cont-1">
            <ParagraphCont>
                <Paragraph1 className="p1">Supplier</Paragraph1>
                <Paragraph2>East cost fruits & vegetables</Paragraph2>
            </ParagraphCont>
            <VerticalLine></VerticalLine>
            <ParagraphCont>
                <Paragraph1 className="p1">Shipping date</Paragraph1>
                <Paragraph2>Thu,Feb 10th</Paragraph2>
            </ParagraphCont>
            <VerticalLine></VerticalLine>
            <ParagraphCont>
                <Paragraph1 className="p1">Total</Paragraph1>
                <Paragraph2>$15028.03</Paragraph2>
            </ParagraphCont>
            <VerticalLine></VerticalLine>
            <ParagraphCont>
                <Paragraph1 className="p1">Category</Paragraph1>
                <Paragraph2>East cost fruits & vegetables</Paragraph2>
            </ParagraphCont>
            <VerticalLine></VerticalLine>
            <ParagraphCont>
                <Paragraph1 className="p1">Department</Paragraph1>
                <Paragraph2>300-444-678</Paragraph2>
            </ParagraphCont>
            <VerticalLine></VerticalLine>
            <ParagraphCont>
                <Paragraph1 className="p1">Status</Paragraph1>
                <Paragraph2>Awaiting your approval</Paragraph2>
            </ParagraphCont>
            
            
        </div>
    </div>
)

export default Cart