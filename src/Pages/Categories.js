import React from 'react'
import {Link} from 'react-router-dom'

function Categories() {
    return (
        <React.Fragment>
           <ul class="list-unstyled templatemo-accordion">
                    <li class="pb-3">
                    <Link class="collapsed d-flex justify-content-between h3 text-decoration-none" to="#">
                            Gender
                            <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </Link>
                        <ul class="collapse show list-unstyled pl-3">
                        <li><Link class="text-decoration-none" to="#">Men</Link></li>
                        <li><Link class="text-decoration-none" to="#">Women</Link></li>
                        </ul>
                    </li>
                    <li class="pb-3">
                        <Link class="collapsed d-flex justify-content-between h3 text-decoration-none" to="#">
                            Sale
                            <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </Link>
                        <ul id="collapseTwo" class="collapse list-unstyled pl-3">
                            <li><Link class="text-decoration-none" to="#">Sport</Link></li>
                            <li><Link class="text-decoration-none" to="#">Luxury</Link></li>
                        </ul>
                    </li>
                    <li class="pb-3">
                    <Link class="collapsed d-flex justify-content-between h3 text-decoration-none" to="#">
                            Product
                            <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </Link>
                        <ul id="collapseThree" class="collapse list-unstyled pl-3">
                        <li><Link class="text-decoration-none" to="#">Bag</Link></li>
                        <li><Link class="text-decoration-none" to="#">Sweather</Link></li>
                        <li><Link class="text-decoration-none" to="#">Sunglass</Link></li>
                        </ul>
                    </li>
                </ul> 
        </React.Fragment>
    )
}

export default Categories
