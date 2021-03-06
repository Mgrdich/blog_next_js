import FormElement from "./FormElement";
import Input from "./Input";
import {IFormElement, IInputElement} from "../../types/components";


type IFormInput<T> = IFormElement<T> & IInputElement & Omit<IInputElement, 'name'>;

const FormInput = <TFormValues extends Record<string, unknown>>
({
     label,
     id,
     name,
     register,
     rules,
     errors,
     ...props
 }: IFormInput<TFormValues>): JSX.Element => {
    const errorMessages: string | undefined = errors ? errors[name]?.message : '';
    const hasError:boolean = !!(errors && errorMessages);

    return (
        <FormElement label={label} error={hasError && errorMessages ? errorMessages : ''}>
            <Input id={id}
                   name={name}
                   {...props}
                   {...(register && register(name, rules))}
            />
        </FormElement>
    );
};

export default FormInput;