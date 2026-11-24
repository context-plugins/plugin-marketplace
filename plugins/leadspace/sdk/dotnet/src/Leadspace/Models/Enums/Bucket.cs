using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Bucket>))]
public sealed record Bucket : OpenStringEnum<Bucket>
{
    private Bucket(string value) : base(value)
    {
    }

    public static readonly Bucket A = new("A");

    public static readonly Bucket B = new("B");

    public static readonly Bucket C = new("C");

    public static readonly Bucket D = new("D");

    public TResult Match<TResult>(Func<TResult> onA,
        Func<TResult> onB,
        Func<TResult> onC,
        Func<TResult> onD,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == A => onA(),
            _ when this == B => onB(),
            _ when this == C => onC(),
            _ when this == D => onD(),
            _ => otherwise(Value)
        };

    public void Match(Action onA, Action onB, Action onC, Action onD, Action<string> otherwise)
    {
        if (this == A) onA();
        else if (this == B) onB();
        else if (this == C) onC();
        else if (this == D) onD();
        else otherwise(Value);
    }
}
