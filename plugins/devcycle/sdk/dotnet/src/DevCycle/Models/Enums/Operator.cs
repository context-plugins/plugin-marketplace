using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Operator type if this object represents an operator, and not a filter
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operator>))]
public sealed record Operator : OpenStringEnum<Operator>
{
    private Operator(string value) : base(value)
    {
    }

    public static readonly Operator And = new("and");

    public static readonly Operator Or = new("or");

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
