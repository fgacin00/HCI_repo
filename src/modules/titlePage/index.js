import React from 'react'
 
import TitleImage from '../../components/titleImage/index.js'
import InquiryBlock from '../../components/inquiryBlock/index.js'
import styles from './style.module.css'
 
const TitlePage = () => (
    <section className={styles.titlePage}>
        <TitleImage />
        <InquiryBlock />
    </section>
)
 
export default TitlePage