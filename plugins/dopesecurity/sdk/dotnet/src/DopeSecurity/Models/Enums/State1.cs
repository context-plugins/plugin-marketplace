using System;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Enum;

namespace DopeSecurity.Models.Enums;

/// <summary>
/// Whether this default entry is applied or ignored for the policy
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1>))]
public sealed record State1 : OpenStringEnum<State1>
{
    private State1(string value) : base(value)
    {
    }

    public static readonly State1 Applied = new("applied");

    public static readonly State1 Ignored = new("ignored");

    public TResult Match<TResult>(Func<TResult> onApplied, Func<TResult> onIgnored, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Applied => onApplied(),
            _ when this == Ignored => onIgnored(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplied, Action onIgnored, Action<string> otherwise)
    {
        if (this == Applied) onApplied();
        else if (this == Ignored) onIgnored();
        else otherwise(Value);
    }
}
