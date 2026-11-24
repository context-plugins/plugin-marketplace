using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// Logical operator to combine multiple rules
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Combinator>))]
public sealed record Combinator : OpenStringEnum<Combinator>
{
    private Combinator(string value) : base(value)
    {
    }

    public static readonly Combinator And = new("AND");

    public static readonly Combinator Or = new("OR");

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
