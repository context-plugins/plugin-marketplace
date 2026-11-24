using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status37>))]
public sealed record Status37 : OpenStringEnum<Status37>
{
    private Status37(string value) : base(value)
    {
    }

    public static readonly Status37 Pending = new("PENDING");

    public static readonly Status37 Running = new("RUNNING");

    public static readonly Status37 Completed = new("COMPLETED");

    public static readonly Status37 Failed = new("FAILED");

    public static readonly Status37 Skipped = new("SKIPPED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onRunning,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onSkipped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Running => onRunning(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Skipped => onSkipped(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onRunning,
        Action onCompleted,
        Action onFailed,
        Action onSkipped,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Skipped) onSkipped();
        else otherwise(Value);
    }
}
