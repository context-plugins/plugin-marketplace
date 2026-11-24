using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Parsing = new("PARSING");

    public static readonly Status1 Pending = new("PENDING");

    public static readonly Status1 Paused = new("PAUSED");

    public static readonly Status1 Halted = new("HALTED");

    public static readonly Status1 Building = new("BUILDING");

    public static readonly Status1 Error = new("ERROR");

    public static readonly Status1 Passed = new("PASSED");

    public static readonly Status1 Failed = new("FAILED");

    public static readonly Status1 Stopped = new("STOPPED");

    public static readonly Status1 Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onParsing,
        Func<TResult> onPending,
        Func<TResult> onPaused,
        Func<TResult> onHalted,
        Func<TResult> onBuilding,
        Func<TResult> onError,
        Func<TResult> onPassed,
        Func<TResult> onFailed,
        Func<TResult> onStopped,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Parsing => onParsing(),
            _ when this == Pending => onPending(),
            _ when this == Paused => onPaused(),
            _ when this == Halted => onHalted(),
            _ when this == Building => onBuilding(),
            _ when this == Error => onError(),
            _ when this == Passed => onPassed(),
            _ when this == Failed => onFailed(),
            _ when this == Stopped => onStopped(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onParsing,
        Action onPending,
        Action onPaused,
        Action onHalted,
        Action onBuilding,
        Action onError,
        Action onPassed,
        Action onFailed,
        Action onStopped,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Parsing) onParsing();
        else if (this == Pending) onPending();
        else if (this == Paused) onPaused();
        else if (this == Halted) onHalted();
        else if (this == Building) onBuilding();
        else if (this == Error) onError();
        else if (this == Passed) onPassed();
        else if (this == Failed) onFailed();
        else if (this == Stopped) onStopped();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
