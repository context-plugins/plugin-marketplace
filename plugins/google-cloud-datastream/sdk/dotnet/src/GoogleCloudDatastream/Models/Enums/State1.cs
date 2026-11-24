using System;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Enum;

namespace GoogleCloudDatastream.Models.Enums;

/// <summary>
/// The state of the stream.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1>))]
public sealed record State1 : OpenStringEnum<State1>
{
    private State1(string value) : base(value)
    {
    }

    public static readonly State1 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State1 NotStarted = new("NOT_STARTED");

    public static readonly State1 Running = new("RUNNING");

    public static readonly State1 Paused = new("PAUSED");

    public static readonly State1 Maintenance = new("MAINTENANCE");

    public static readonly State1 Failed = new("FAILED");

    public static readonly State1 FailedPermanently = new("FAILED_PERMANENTLY");

    public static readonly State1 Starting = new("STARTING");

    public static readonly State1 Draining = new("DRAINING");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onNotStarted,
        Func<TResult> onRunning,
        Func<TResult> onPaused,
        Func<TResult> onMaintenance,
        Func<TResult> onFailed,
        Func<TResult> onFailedPermanently,
        Func<TResult> onStarting,
        Func<TResult> onDraining,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == NotStarted => onNotStarted(),
            _ when this == Running => onRunning(),
            _ when this == Paused => onPaused(),
            _ when this == Maintenance => onMaintenance(),
            _ when this == Failed => onFailed(),
            _ when this == FailedPermanently => onFailedPermanently(),
            _ when this == Starting => onStarting(),
            _ when this == Draining => onDraining(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onNotStarted,
        Action onRunning,
        Action onPaused,
        Action onMaintenance,
        Action onFailed,
        Action onFailedPermanently,
        Action onStarting,
        Action onDraining,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == NotStarted) onNotStarted();
        else if (this == Running) onRunning();
        else if (this == Paused) onPaused();
        else if (this == Maintenance) onMaintenance();
        else if (this == Failed) onFailed();
        else if (this == FailedPermanently) onFailedPermanently();
        else if (this == Starting) onStarting();
        else if (this == Draining) onDraining();
        else otherwise(Value);
    }
}
