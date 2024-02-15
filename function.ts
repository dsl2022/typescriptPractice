interface FormField<T>{
    value?:T;
    defaultValue:T;
    isValid:boolean;
}

// specific type

function getStringFieldValue(field:FormField<string>):string{
    if(!field.isValid || field.value===undefined){
        return field.defaultValue.toLowerCase();
    }
    return field.value;
}

// Generic. Can be called with any `FormField`.
function getFieldValue<T>(field: FormField<T>): T {
    if (!field.isValid || field.value === undefined) {
        // On the other hand, we don't know anything about the type of `field.defaultValue`.
        return field.defaultValue;
    }
    return field.value;
}