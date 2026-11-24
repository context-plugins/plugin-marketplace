using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ValueModelContentFormulasItemsConditionsItemsOperator>))]
public sealed record ValueModelContentFormulasItemsConditionsItemsOperator : OpenStringEnum<ValueModelContentFormulasItemsConditionsItemsOperator>
{
    private ValueModelContentFormulasItemsConditionsItemsOperator(string value) : base(value)
    {
    }

    public static readonly ValueModelContentFormulasItemsConditionsItemsOperator Gte = new("gte");

    public static readonly ValueModelContentFormulasItemsConditionsItemsOperator Gt = new("gt");

    public static readonly ValueModelContentFormulasItemsConditionsItemsOperator Lt = new("lt");

    public static readonly ValueModelContentFormulasItemsConditionsItemsOperator Lte = new("lte");

    public static readonly ValueModelContentFormulasItemsConditionsItemsOperator Eq = new("eq");

    public static readonly ValueModelContentFormulasItemsConditionsItemsOperator Neq = new("neq");

    public static readonly ValueModelContentFormulasItemsConditionsItemsOperator Contains = new("contains");

    public static readonly ValueModelContentFormulasItemsConditionsItemsOperator EqString = new("eq_string");

    public static readonly ValueModelContentFormulasItemsConditionsItemsOperator EqBool = new("eq_bool");

    public TResult Match<TResult>(Func<TResult> onGte,
        Func<TResult> onGt,
        Func<TResult> onLt,
        Func<TResult> onLte,
        Func<TResult> onEq,
        Func<TResult> onNeq,
        Func<TResult> onContains,
        Func<TResult> onEqString,
        Func<TResult> onEqBool,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gte => onGte(),
            _ when this == Gt => onGt(),
            _ when this == Lt => onLt(),
            _ when this == Lte => onLte(),
            _ when this == Eq => onEq(),
            _ when this == Neq => onNeq(),
            _ when this == Contains => onContains(),
            _ when this == EqString => onEqString(),
            _ when this == EqBool => onEqBool(),
            _ => otherwise(Value)
        };

    public void Match(Action onGte,
        Action onGt,
        Action onLt,
        Action onLte,
        Action onEq,
        Action onNeq,
        Action onContains,
        Action onEqString,
        Action onEqBool,
        Action<string> otherwise)
    {
        if (this == Gte) onGte();
        else if (this == Gt) onGt();
        else if (this == Lt) onLt();
        else if (this == Lte) onLte();
        else if (this == Eq) onEq();
        else if (this == Neq) onNeq();
        else if (this == Contains) onContains();
        else if (this == EqString) onEqString();
        else if (this == EqBool) onEqBool();
        else otherwise(Value);
    }
}
