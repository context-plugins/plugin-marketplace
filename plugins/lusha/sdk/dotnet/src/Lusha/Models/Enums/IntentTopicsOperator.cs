using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

/// <summary>
/// Recommended over <c>intentTopicsCondition</c>. <c>any</c>/<c>all</c> are aliases for <c>or</c>/<c>and</c>. <c>intentTopicsCondition</c> is not deprecated and remains accepted.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IntentTopicsOperator>))]
public sealed record IntentTopicsOperator : OpenStringEnum<IntentTopicsOperator>
{
    private IntentTopicsOperator(string value) : base(value)
    {
    }

    public static readonly IntentTopicsOperator Or = new("or");

    public static readonly IntentTopicsOperator And = new("and");

    public static readonly IntentTopicsOperator Any = new("any");

    public static readonly IntentTopicsOperator All = new("all");

    public TResult Match<TResult>(Func<TResult> onOr,
        Func<TResult> onAnd,
        Func<TResult> onAny,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Or => onOr(),
            _ when this == And => onAnd(),
            _ when this == Any => onAny(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onOr, Action onAnd, Action onAny, Action onAll, Action<string> otherwise)
    {
        if (this == Or) onOr();
        else if (this == And) onAnd();
        else if (this == Any) onAny();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
