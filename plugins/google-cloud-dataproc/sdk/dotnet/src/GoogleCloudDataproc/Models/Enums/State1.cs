using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The state of the session at this point in the session history.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1>))]
public sealed record State1 : OpenStringEnum<State1>
{
    private State1(string value) : base(value)
    {
    }

    public static readonly State1 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State1 Creating = new("CREATING");

    public static readonly State1 Active = new("ACTIVE");

    public static readonly State1 Terminating = new("TERMINATING");

    public static readonly State1 Terminated = new("TERMINATED");

    public static readonly State1 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onCreating,
        Func<TResult> onActive,
        Func<TResult> onTerminating,
        Func<TResult> onTerminated,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Creating => onCreating(),
            _ when this == Active => onActive(),
            _ when this == Terminating => onTerminating(),
            _ when this == Terminated => onTerminated(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onCreating,
        Action onActive,
        Action onTerminating,
        Action onTerminated,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Creating) onCreating();
        else if (this == Active) onActive();
        else if (this == Terminating) onTerminating();
        else if (this == Terminated) onTerminated();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
