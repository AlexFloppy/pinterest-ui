import { PinCard } from "./PinCard";
import { IPin }  from "../interfaces"

import { addPin } from '../store/actions';

// Функция connect является связующим между компонентом и store из redux,
// эта функция принимает два параметра:
// 1. функция, в которую аргументом приходит state из store, которая возвращает объект, в котором
//    мы должны указать какие данные хотим получить в своем компоненте
// 2. функция, которая должна вернуть ваши actions, которые в дальнейшем тоже попадут в свойства компонента который оборачиваете.
import { connect } from 'react-redux';

// Это специальная функция которая все полученые в объекте actions будет оборачивать в функцию dispatch,
// это нужно для того чтобы вызывая свои actions вы не просто получали объект, а обращались с ним в глобальный store,
// где с помощью reducers будет идти обработка этого action'a
import { bindActionCreators } from 'redux';

// mapStateToProps - выбираем какие данные нам нужны из store, которые в дальнейшем запишутся в props
// компонента который мы оборачиваем.
const mapStateToProps = (state:any) => ({ pins: state.pins });

// mapDispatchToProps - передаем все нужные нам actions в оборачеваемый компонент, но перед этим оборачиваем
// все actions в функцию dispatch
const mapDispatchToProps = (dispatch:any) => ( bindActionCreators({ addPin }, dispatch) );

const Pins = (props:any) => {
  console.log(props)
  return (
    <section
      id="pins"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {props.pins.map(({image_url, authorId, description}:IPin) => (
          <PinCard image_url={image_url} authorId={authorId} description={description} />
        ))}
      </div>
    </section>
  );
};

// @connect - "@" - обозначает декоратор, это es7. Функция "connect" декорирует объект, имеется ввиду что на
// выходе мы получаем новый, измененный компонент который содержит в себе дополнительные функции и свойства,
// а какие именно - мы определяем в функциях передаваемых внутрь функции connect.
export default connect(mapStateToProps, mapDispatchToProps)(Pins)

