using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The logical operator used to combine multiple custom field filters. Defaults to <c>and</c> if not specified.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomFieldsLogicalOperator2>))]
public sealed record CustomFieldsLogicalOperator2 : OpenStringEnum<CustomFieldsLogicalOperator2>
{
    private CustomFieldsLogicalOperator2(string value) : base(value)
    {
    }

    public static readonly CustomFieldsLogicalOperator2 And = new("and");

    public static readonly CustomFieldsLogicalOperator2 Or = new("or");

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
