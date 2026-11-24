using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// The current state of the insight.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Active = new("ACTIVE");

    public static readonly State Closed = new("CLOSED");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onClosed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Closed => onClosed(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onClosed, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Closed) onClosed();
        else otherwise(Value);
    }
}
