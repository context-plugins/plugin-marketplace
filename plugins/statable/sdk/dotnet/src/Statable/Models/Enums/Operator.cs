using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

/// <summary>
/// e = equals, b = begins with, c = contains.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operator>))]
public sealed record Operator : OpenStringEnum<Operator>
{
    private Operator(string value) : base(value)
    {
    }

    public static readonly Operator E = new("e");

    public static readonly Operator B = new("b");

    public static readonly Operator C = new("c");

    public TResult Match<TResult>(Func<TResult> onE,
        Func<TResult> onB,
        Func<TResult> onC,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == E => onE(),
            _ when this == B => onB(),
            _ when this == C => onC(),
            _ => otherwise(Value)
        };

    public void Match(Action onE, Action onB, Action onC, Action<string> otherwise)
    {
        if (this == E) onE();
        else if (this == B) onB();
        else if (this == C) onC();
        else otherwise(Value);
    }
}
