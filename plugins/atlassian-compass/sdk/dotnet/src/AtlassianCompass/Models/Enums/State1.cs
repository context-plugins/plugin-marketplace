using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// The state of the deployment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1>))]
public sealed record State1 : OpenStringEnum<State1>
{
    private State1(string value) : base(value)
    {
    }

    public static readonly State1 Pending = new("PENDING");

    public static readonly State1 InProgress = new("IN_PROGRESS");

    public static readonly State1 Successful = new("SUCCESSFUL");

    public static readonly State1 Cancelled = new("CANCELLED");

    public static readonly State1 Failed = new("FAILED");

    public static readonly State1 RolledBack = new("ROLLED_BACK");

    public static readonly State1 Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onInProgress,
        Func<TResult> onSuccessful,
        Func<TResult> onCancelled,
        Func<TResult> onFailed,
        Func<TResult> onRolledBack,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == InProgress => onInProgress(),
            _ when this == Successful => onSuccessful(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Failed => onFailed(),
            _ when this == RolledBack => onRolledBack(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onInProgress,
        Action onSuccessful,
        Action onCancelled,
        Action onFailed,
        Action onRolledBack,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == InProgress) onInProgress();
        else if (this == Successful) onSuccessful();
        else if (this == Cancelled) onCancelled();
        else if (this == Failed) onFailed();
        else if (this == RolledBack) onRolledBack();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
