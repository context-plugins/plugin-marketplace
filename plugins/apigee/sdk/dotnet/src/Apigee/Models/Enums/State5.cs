using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The current state of the canary evaluation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State5>))]
public sealed record State5 : OpenStringEnum<State5>
{
    private State5(string value) : base(value)
    {
    }

    public static readonly State5 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State5 Running = new("RUNNING");

    public static readonly State5 Succeeded = new("SUCCEEDED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onRunning,
        Func<TResult> onSucceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Running => onRunning(),
            _ when this == Succeeded => onSucceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified, Action onRunning, Action onSucceeded, Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Running) onRunning();
        else if (this == Succeeded) onSucceeded();
        else otherwise(Value);
    }
}
