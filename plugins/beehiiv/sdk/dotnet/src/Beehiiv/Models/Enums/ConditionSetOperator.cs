using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// How multiple condition sets are combined when evaluating dynamic content targeting.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConditionSetOperator>))]
public sealed record ConditionSetOperator : OpenStringEnum<ConditionSetOperator>
{
    private ConditionSetOperator(string value) : base(value)
    {
    }

    public static readonly ConditionSetOperator And = new("and");

    public static readonly ConditionSetOperator Or = new("or");

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
