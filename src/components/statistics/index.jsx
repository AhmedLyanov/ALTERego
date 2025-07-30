import './style.scss'
import { HEADER_TEXTS } from '../../constants/constants'
import Succesfull_course_list from '../succesfull_course_list'
import EducationalProcess from '../educational_proccess'
export default function Statistics(){
    return(
        <div className="container__statistics_list">
            <div className="list__statistics_content">
                <h4 className='title_statistic'>{HEADER_TEXTS.statistics.title_statistic_top}</h4>
                <div className="content__card_statistic">
                    <Succesfull_course_list/>
                </div>
            </div>
            <div className="list__statistics_content">
                <h4 className='title_statistic'>{HEADER_TEXTS.statistics.title_statistic_center}</h4>
                <div className="content__card_statistic">
                     <EducationalProcess/>
                </div>
            </div>
            <div className="list__statistics_content">
                <h4 className='title_statistic'>{HEADER_TEXTS.statistics.title_statistic_bottom}</h4>
                <div className="content__card_statistic">

                </div>
            </div>
        </div>
    )
}
