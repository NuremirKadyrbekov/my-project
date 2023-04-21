import css from './content.module.css'
import block from './block.module.css'
export const Content = () =>{
    return(
        <div>
            <div className={css.Blocks}>
                 <div className={css.block1}><div className={css.Toch1}></div><p>Weight Lifting</p></div>
                 <div className={css.block2}><div className={css.Toch2}></div><p>Weight Lifting</p></div>
                 <div className={css.block3}><div className={css.Toch3}></div><p>Weight Lifting</p></div>
                 <div className={css.block4}><div className={css.Toch4}></div><p>Weight Lifting</p></div>
            </div>
            <div className={block.Block}>
                   <div className={block.block1}><div className={css.Toch1}></div><p>Weight Lifting</p></div>
                   <div className={block.block2}><div className={css.Toch2}></div><p>Weight Lifting</p></div>
                   <div className={block.block3}><div className={css.Toch3}></div><p className={css.TextP}>Weight Lifting</p></div>
                   <div className={block.block4}><div className={css.Toch3}></div><p className={css.TextP}>Weight Lifting</p></div>
                   <div className={block.block5}><div className={css.Toch3}></div><p className={css.TextP}>Weight Lifting</p></div>
                   <div className={block.block6}><div className={css.Toch3}></div><p className={css.TextP}>Weight Lifting</p></div>
            </div>
        </div>
    )
}