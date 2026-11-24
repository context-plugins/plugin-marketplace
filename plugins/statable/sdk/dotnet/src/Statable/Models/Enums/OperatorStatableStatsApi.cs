using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OperatorStatableStatsApi>))]
public sealed record OperatorStatableStatsApi : OpenStringEnum<OperatorStatableStatsApi>
{
    private OperatorStatableStatsApi(string value) : base(value)
    {
    }

    public static readonly OperatorStatableStatsApi IsMember = new("is");

    public static readonly OperatorStatableStatsApi IsNot = new("is_not");

    public static readonly OperatorStatableStatsApi Contains = new("contains");

    public static readonly OperatorStatableStatsApi DoesNotContain = new("does_not_contain");

    public TResult Match<TResult>(Func<TResult> onIsMember,
        Func<TResult> onIsNot,
        Func<TResult> onContains,
        Func<TResult> onDoesNotContain,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IsMember => onIsMember(),
            _ when this == IsNot => onIsNot(),
            _ when this == Contains => onContains(),
            _ when this == DoesNotContain => onDoesNotContain(),
            _ => otherwise(Value)
        };

    public void Match(Action onIsMember,
        Action onIsNot,
        Action onContains,
        Action onDoesNotContain,
        Action<string> otherwise)
    {
        if (this == IsMember) onIsMember();
        else if (this == IsNot) onIsNot();
        else if (this == Contains) onContains();
        else if (this == DoesNotContain) onDoesNotContain();
        else otherwise(Value);
    }
}
