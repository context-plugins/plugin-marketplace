using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Provides the status of the entity recognizer.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status4>))]
public sealed record Status4 : OpenStringEnum<Status4>
{
    private Status4(string value) : base(value)
    {
    }

    public static readonly Status4 Submitted = new("SUBMITTED");

    public static readonly Status4 Training = new("TRAINING");

    public static readonly Status4 Deleting = new("DELETING");

    public static readonly Status4 StopRequested = new("STOP_REQUESTED");

    public static readonly Status4 Stopped = new("STOPPED");

    public static readonly Status4 InError = new("IN_ERROR");

    public static readonly Status4 Trained = new("TRAINED");

    public static readonly Status4 TrainedWithWarning = new("TRAINED_WITH_WARNING");

    public TResult Match<TResult>(Func<TResult> onSubmitted,
        Func<TResult> onTraining,
        Func<TResult> onDeleting,
        Func<TResult> onStopRequested,
        Func<TResult> onStopped,
        Func<TResult> onInError,
        Func<TResult> onTrained,
        Func<TResult> onTrainedWithWarning,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Submitted => onSubmitted(),
            _ when this == Training => onTraining(),
            _ when this == Deleting => onDeleting(),
            _ when this == StopRequested => onStopRequested(),
            _ when this == Stopped => onStopped(),
            _ when this == InError => onInError(),
            _ when this == Trained => onTrained(),
            _ when this == TrainedWithWarning => onTrainedWithWarning(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubmitted,
        Action onTraining,
        Action onDeleting,
        Action onStopRequested,
        Action onStopped,
        Action onInError,
        Action onTrained,
        Action onTrainedWithWarning,
        Action<string> otherwise)
    {
        if (this == Submitted) onSubmitted();
        else if (this == Training) onTraining();
        else if (this == Deleting) onDeleting();
        else if (this == StopRequested) onStopRequested();
        else if (this == Stopped) onStopped();
        else if (this == InError) onInError();
        else if (this == Trained) onTrained();
        else if (this == TrainedWithWarning) onTrainedWithWarning();
        else otherwise(Value);
    }
}
