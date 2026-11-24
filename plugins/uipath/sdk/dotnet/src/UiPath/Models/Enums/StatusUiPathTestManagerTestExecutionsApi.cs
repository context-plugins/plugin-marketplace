using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Aggregate execution status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusUiPathTestManagerTestExecutionsApi>))]
public sealed record StatusUiPathTestManagerTestExecutionsApi : OpenStringEnum<StatusUiPathTestManagerTestExecutionsApi>
{
    private StatusUiPathTestManagerTestExecutionsApi(string value) : base(value)
    {
    }

    public static readonly StatusUiPathTestManagerTestExecutionsApi Pending = new("Pending");

    public static readonly StatusUiPathTestManagerTestExecutionsApi Running = new("Running");

    public static readonly StatusUiPathTestManagerTestExecutionsApi Passed = new("Passed");

    public static readonly StatusUiPathTestManagerTestExecutionsApi Failed = new("Failed");

    public static readonly StatusUiPathTestManagerTestExecutionsApi Blocked = new("Blocked");

    public static readonly StatusUiPathTestManagerTestExecutionsApi Cancelled = new("Cancelled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onRunning,
        Func<TResult> onPassed,
        Func<TResult> onFailed,
        Func<TResult> onBlocked,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Running => onRunning(),
            _ when this == Passed => onPassed(),
            _ when this == Failed => onFailed(),
            _ when this == Blocked => onBlocked(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onRunning,
        Action onPassed,
        Action onFailed,
        Action onBlocked,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else if (this == Passed) onPassed();
        else if (this == Failed) onFailed();
        else if (this == Blocked) onBlocked();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
