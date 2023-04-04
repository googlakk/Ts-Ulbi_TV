import React, {FC, useState} from 'react'


// enum - перечисление
export enum CardVariant {
    default = 'default',
    primary = 'primary',
    success = 'green',
    info = 'yellow',
    warning = 'red'
    
}

interface CardProps {
    width?: string,
    height?: string,
    children?: React.ReactNode,
    variant: CardVariant,
    // Передаем функцию
    //Если наша функция должна принимать какие то парматеры, то тут же их обьявляем 
    onCLick: (num: number) => void
}


const Card:FC<CardProps> = ({width, height, children, variant, onCLick}) => {
    const [state, setState]  = useState(0)
  return (
    <div 
    onClick={() => onCLick(state)}
    style={{width, height, 
        border: variant === CardVariant.info ? '1px solid yellow' : 'none',
        background: variant === CardVariant.success ? 'green' : 'none'
        }}>
        {children}
    </div>
  )
}

export default Card