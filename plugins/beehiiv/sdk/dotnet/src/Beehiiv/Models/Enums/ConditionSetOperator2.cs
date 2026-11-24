using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// Instructs how to combine multiple condition sets. Defaults to "or" (subscriber can match any condition). Use "and" to show the block if the subscriber meets all conditions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConditionSetOperator2>))]
public sealed record ConditionSetOperator2 : OpenStringEnum<ConditionSetOperator2>
{
    private ConditionSetOperator2(string value) : base(value)
    {
    }

    public static readonly ConditionSetOperator2 And = new("and");

    public static readonly ConditionSetOperator2 Or = new("or");

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
