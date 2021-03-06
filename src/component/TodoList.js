import { VerticalTimeline,VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import DoneIcon from '@mui/icons-material/Done';

const ToDoList = ({toDoList, handleToggle, handleFilter, handleDelete}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.target.dataset.id)
    }
    const handleClickDelete = (e)=> {
        e.preventDefault();
        confirmAlert({
            title: 'Thông báo',
            message: ' Bạn có chắn chắn muốn xóa nhiệm vụ?',
            buttons: [
                {
                label: 'Yes',
                onClick: () => handleDelete(e.target.dataset.id)
                },
                {
                label: 'No',
                }
            ]
        });
    }
    return (
        <div className="contains-list">
            <div className="btn">
                <button onClick={handleFilter}>Clear All Completed</button>
            </div>
            <VerticalTimeline>
                {
                    toDoList.map(todo => {
                        const myClass = todo.complete ? "strick" : "nostrick";
                        const Icon = todo.complete ? <DoneIcon /> : <WorkIcon />
                        const title = todo.complete ? "You're Done" : "Unfinished , Fighting!";
                        const btnTitle = todo.complete ? 'Completed' : 'Complete';
                        const btnClass = todo.complete ? 'btn_Accomplished' : 'btn_complete';
                        const btnDelete = todo.complete ? 'btn_del_Accomplished' : 'btn_del_complete';
                        return (
                            <VerticalTimelineElement className={myClass}
                                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    date={"Due: " + todo.dateOf} id={String(todo.id)} icon={Icon}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                    <button onClick={handleClick} data-id={String(todo.id)}
                                    className={btnClass}>{btnTitle}</button>
                                    <button style={{marginLeft: "5px"}} data-id={String(todo.id)} 
                                    onClick={handleClickDelete} className={btnDelete}>Delete</button>
                                    <h3 className="vertical-timeline-element-title">{title}</h3>
                                    <p>Task: {todo.task}</p>
                                </VerticalTimelineElement>
                        )
                    })
                }
                <VerticalTimelineElement icon={<StarIcon/>}
                    iconStyle={{ background: 'rgba(0, 202, 0, 0.947)', color: '#fff' }}>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};
export default ToDoList;
