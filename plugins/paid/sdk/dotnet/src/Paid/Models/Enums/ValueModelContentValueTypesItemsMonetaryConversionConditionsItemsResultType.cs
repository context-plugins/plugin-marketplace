using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType>))]
public sealed record ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType : OpenStringEnum<ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType>
{
    private ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType(string value) : base(value)
    {
    }

    public static readonly ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType Constant = new(
        "constant");

    public static readonly ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType Expression = new(
        "expression");

    public TResult Match<TResult>(Func<TResult> onConstant,
        Func<TResult> onExpression,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Constant => onConstant(),
            _ when this == Expression => onExpression(),
            _ => otherwise(Value)
        };

    public void Match(Action onConstant, Action onExpression, Action<string> otherwise)
    {
        if (this == Constant) onConstant();
        else if (this == Expression) onExpression();
        else otherwise(Value);
    }
}
