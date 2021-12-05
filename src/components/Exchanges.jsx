import React from 'react';
import {Col, Row, Typography, Collapse, Avatar } from 'antd'
import HTMLReactParser from 'html-react-parser'
import { useGetCryptoExchangeQuery } from '../services/cryptoApi';
import millify from 'millify'
const {Text} = Typography
const {Panel} = Collapse;
function Exchanges () {
    const {data, isFetching} = useGetCryptoExchangeQuery()
    const exchangeList = data?.data?.exchanges
    if(isFetching) return 'Loading...'
    console.log(data)
    return (
        <>
            <Row>
                <Col span={6}> Exchanges </Col>
                <Col span={6}> 24 Hours Trade Volume</Col>
                <Col span={6}> Market </Col>
                <Col span={6}> Change </Col>
            </Row>
            <Row>
                {exchangeList.map((exchange) => (
                    <Col span={24} key={exchange.id}>
                        <Collapse> 
                            <Panel key={exchange.id} showArrow={false} header={(
                                <Row key={exchange.id}> 
                                    <Col span={6}>
                                        <Text><strong> {exchange.rank}</strong> </Text>
                                        <Avatar className='exchange-image' src={exchange.iconUrl}> </Avatar>
                                        <Text><strong>{exchange.name} </strong> </Text>
                                    </Col>
                                    <Col span={6}>${millify(exchange.volume)} </Col>
                                    <Col span={6}> {millify(exchange.numberOfMarkets)} </Col>
                                    <Col span={6}>{millify(exchange.marketShare)}  </Col>
                                </Row>
                            )}> 
                            {HTMLReactParser(exchange.description ||'')}
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Exchanges