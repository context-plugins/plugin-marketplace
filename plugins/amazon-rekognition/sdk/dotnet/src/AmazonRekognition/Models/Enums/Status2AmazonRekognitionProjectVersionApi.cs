using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The current running status of the model.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status2AmazonRekognitionProjectVersionApi>))]
public sealed record Status2AmazonRekognitionProjectVersionApi : OpenStringEnum<Status2AmazonRekognitionProjectVersionApi>
{
    private Status2AmazonRekognitionProjectVersionApi(string value) : base(value)
    {
    }

    public static readonly Status2AmazonRekognitionProjectVersionApi TrainingInProgress = new("TRAINING_IN_PROGRESS");

    public static readonly Status2AmazonRekognitionProjectVersionApi TrainingCompleted = new("TRAINING_COMPLETED");

    public static readonly Status2AmazonRekognitionProjectVersionApi TrainingFailed = new("TRAINING_FAILED");

    public static readonly Status2AmazonRekognitionProjectVersionApi Starting = new("STARTING");

    public static readonly Status2AmazonRekognitionProjectVersionApi Running = new("RUNNING");

    public static readonly Status2AmazonRekognitionProjectVersionApi Failed = new("FAILED");

    public static readonly Status2AmazonRekognitionProjectVersionApi Stopping = new("STOPPING");

    public static readonly Status2AmazonRekognitionProjectVersionApi Stopped = new("STOPPED");

    public static readonly Status2AmazonRekognitionProjectVersionApi Deleting = new("DELETING");

    public static readonly Status2AmazonRekognitionProjectVersionApi CopyingInProgress = new("COPYING_IN_PROGRESS");

    public static readonly Status2AmazonRekognitionProjectVersionApi CopyingCompleted = new("COPYING_COMPLETED");

    public static readonly Status2AmazonRekognitionProjectVersionApi CopyingFailed = new("COPYING_FAILED");

    public static readonly Status2AmazonRekognitionProjectVersionApi Deprecated = new("DEPRECATED");

    public static readonly Status2AmazonRekognitionProjectVersionApi Expired = new("EXPIRED");

    public TResult Match<TResult>(Func<TResult> onTrainingInProgress,
        Func<TResult> onTrainingCompleted,
        Func<TResult> onTrainingFailed,
        Func<TResult> onStarting,
        Func<TResult> onRunning,
        Func<TResult> onFailed,
        Func<TResult> onStopping,
        Func<TResult> onStopped,
        Func<TResult> onDeleting,
        Func<TResult> onCopyingInProgress,
        Func<TResult> onCopyingCompleted,
        Func<TResult> onCopyingFailed,
        Func<TResult> onDeprecated,
        Func<TResult> onExpired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TrainingInProgress => onTrainingInProgress(),
            _ when this == TrainingCompleted => onTrainingCompleted(),
            _ when this == TrainingFailed => onTrainingFailed(),
            _ when this == Starting => onStarting(),
            _ when this == Running => onRunning(),
            _ when this == Failed => onFailed(),
            _ when this == Stopping => onStopping(),
            _ when this == Stopped => onStopped(),
            _ when this == Deleting => onDeleting(),
            _ when this == CopyingInProgress => onCopyingInProgress(),
            _ when this == CopyingCompleted => onCopyingCompleted(),
            _ when this == CopyingFailed => onCopyingFailed(),
            _ when this == Deprecated => onDeprecated(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrainingInProgress,
        Action onTrainingCompleted,
        Action onTrainingFailed,
        Action onStarting,
        Action onRunning,
        Action onFailed,
        Action onStopping,
        Action onStopped,
        Action onDeleting,
        Action onCopyingInProgress,
        Action onCopyingCompleted,
        Action onCopyingFailed,
        Action onDeprecated,
        Action onExpired,
        Action<string> otherwise)
    {
        if (this == TrainingInProgress) onTrainingInProgress();
        else if (this == TrainingCompleted) onTrainingCompleted();
        else if (this == TrainingFailed) onTrainingFailed();
        else if (this == Starting) onStarting();
        else if (this == Running) onRunning();
        else if (this == Failed) onFailed();
        else if (this == Stopping) onStopping();
        else if (this == Stopped) onStopped();
        else if (this == Deleting) onDeleting();
        else if (this == CopyingInProgress) onCopyingInProgress();
        else if (this == CopyingCompleted) onCopyingCompleted();
        else if (this == CopyingFailed) onCopyingFailed();
        else if (this == Deprecated) onDeprecated();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
