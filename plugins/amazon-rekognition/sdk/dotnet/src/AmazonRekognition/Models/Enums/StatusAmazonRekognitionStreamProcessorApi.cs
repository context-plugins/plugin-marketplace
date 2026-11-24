using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Current status of the stream processor.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonRekognitionStreamProcessorApi>))]
public sealed record StatusAmazonRekognitionStreamProcessorApi : OpenStringEnum<StatusAmazonRekognitionStreamProcessorApi>
{
    private StatusAmazonRekognitionStreamProcessorApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonRekognitionStreamProcessorApi Stopped = new("STOPPED");

    public static readonly StatusAmazonRekognitionStreamProcessorApi Starting = new("STARTING");

    public static readonly StatusAmazonRekognitionStreamProcessorApi Running = new("RUNNING");

    public static readonly StatusAmazonRekognitionStreamProcessorApi Failed = new("FAILED");

    public static readonly StatusAmazonRekognitionStreamProcessorApi Stopping = new("STOPPING");

    public static readonly StatusAmazonRekognitionStreamProcessorApi Updating = new("UPDATING");

    public TResult Match<TResult>(Func<TResult> onStopped,
        Func<TResult> onStarting,
        Func<TResult> onRunning,
        Func<TResult> onFailed,
        Func<TResult> onStopping,
        Func<TResult> onUpdating,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stopped => onStopped(),
            _ when this == Starting => onStarting(),
            _ when this == Running => onRunning(),
            _ when this == Failed => onFailed(),
            _ when this == Stopping => onStopping(),
            _ when this == Updating => onUpdating(),
            _ => otherwise(Value)
        };

    public void Match(Action onStopped,
        Action onStarting,
        Action onRunning,
        Action onFailed,
        Action onStopping,
        Action onUpdating,
        Action<string> otherwise)
    {
        if (this == Stopped) onStopped();
        else if (this == Starting) onStarting();
        else if (this == Running) onRunning();
        else if (this == Failed) onFailed();
        else if (this == Stopping) onStopping();
        else if (this == Updating) onUpdating();
        else otherwise(Value);
    }
}
