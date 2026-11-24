using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Lifecycle states for a platform check run.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CheckRunStatus>))]
public sealed record CheckRunStatus : OpenStringEnum<CheckRunStatus>
{
    private CheckRunStatus(string value) : base(value)
    {
    }

    public static readonly CheckRunStatus Running = new("running");

    public static readonly CheckRunStatus Passed = new("passed");

    public static readonly CheckRunStatus Failed = new("failed");

    public static readonly CheckRunStatus Error = new("error");

    public TResult Match<TResult>(Func<TResult> onRunning,
        Func<TResult> onPassed,
        Func<TResult> onFailed,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Running => onRunning(),
            _ when this == Passed => onPassed(),
            _ when this == Failed => onFailed(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onRunning, Action onPassed, Action onFailed, Action onError, Action<string> otherwise)
    {
        if (this == Running) onRunning();
        else if (this == Passed) onPassed();
        else if (this == Failed) onFailed();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
