import { socialItems } from '../constants';
//import {navigation} from '../data';
//import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <div>
        <ul className='flex space-x-8 capitalize text-[14px]'>
            {socialItems.map((item, index) => {
                return (
                    <li className='hover:text-accent cursor-pointer'
                    key={index}>
                        <a className='transition-all diration-300'
                            href={item.href}>{item.icon}
                        </a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
export default Nav;
