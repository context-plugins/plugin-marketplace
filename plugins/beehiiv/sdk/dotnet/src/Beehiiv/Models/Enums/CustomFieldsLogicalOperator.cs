using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CustomFieldsLogicalOperator>))]
public sealed record CustomFieldsLogicalOperator : OpenStringEnum<CustomFieldsLogicalOperator>
{
    private CustomFieldsLogicalOperator(string value) : base(value)
    {
    }

    public static readonly CustomFieldsLogicalOperator And = new("and");

    public static readonly CustomFieldsLogicalOperator Or = new("or");

    public TResult Match<TResult>(Func<TResult> onAnd, Func<TResult> onOr, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == And => onAnd(),
            _ when this == Or => onOr(),
            _ => otherwise(Value)
        };

    public void Match(Action onAnd, Action onOr, Action<string> otherwise)
    {
        if (this == And) onAnd();
        else if (this == Or) onOr();
        else otherwise(Value);
    }
}
