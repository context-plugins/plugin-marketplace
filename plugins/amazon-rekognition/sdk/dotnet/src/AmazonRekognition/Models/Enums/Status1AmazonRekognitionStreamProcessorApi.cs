using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Current status of the Amazon Rekognition stream processor.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1AmazonRekognitionStreamProcessorApi>))]
public sealed record Status1AmazonRekognitionStreamProcessorApi : OpenStringEnum<Status1AmazonRekognitionStreamProcessorApi>
{
    private Status1AmazonRekognitionStreamProcessorApi(string value) : base(value)
    {
    }

    public static readonly Status1AmazonRekognitionStreamProcessorApi Stopped = new("STOPPED");

    public static readonly Status1AmazonRekognitionStreamProcessorApi Starting = new("STARTING");

    public static readonly Status1AmazonRekognitionStreamProcessorApi Running = new("RUNNING");

    public static readonly Status1AmazonRekognitionStreamProcessorApi Failed = new("FAILED");

    public static readonly Status1AmazonRekognitionStreamProcessorApi Stopping = new("STOPPING");

    public static readonly Status1AmazonRekognitionStreamProcessorApi Updating = new("UPDATING");

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
