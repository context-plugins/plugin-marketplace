using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Comparator5>))]
public sealed record Comparator5 : OpenStringEnum<Comparator5>
{
    private Comparator5(string value) : base(value)
    {
    }

    public static readonly Comparator5 U003D = new("=");

    public static readonly Comparator5 U0021U003D = new("!=");

    public TResult Match<TResult>(Func<TResult> onU003D, Func<TResult> onU0021U003D, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == U003D => onU003D(),
            _ when this == U0021U003D => onU0021U003D(),
            _ => otherwise(Value)
        };

    public void Match(Action onU003D, Action onU0021U003D, Action<string> otherwise)
    {
        if (this == U003D) onU003D();
        else if (this == U0021U003D) onU0021U003D();
        else otherwise(Value);
    }
}
