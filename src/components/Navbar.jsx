import {React} from 'react'
import {Button, Menu, Typography, Avatar} from 'antd'
import {Link } from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@art-design/icons'
import icon from '../images/cryptoapplogo.png'
function Navbar() {
  return (
		<div className='nav-container'>
			<div className='logo-container'>
                <Avatar src={icon} size='medium'/>
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto App</Link>
                </Typography.Title>
                <Button className='menu-control-container'></Button>
            </div>
		</div>
	);
}

export default Navbar;
