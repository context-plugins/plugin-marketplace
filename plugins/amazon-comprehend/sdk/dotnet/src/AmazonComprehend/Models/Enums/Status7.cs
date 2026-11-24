using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Filters the list of classifiers based on status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status7>))]
public sealed record Status7 : OpenStringEnum<Status7>
{
    private Status7(string value) : base(value)
    {
    }

    public static readonly Status7 Submitted = new("SUBMITTED");

    public static readonly Status7 Training = new("TRAINING");

    public static readonly Status7 Deleting = new("DELETING");

    public static readonly Status7 StopRequested = new("STOP_REQUESTED");

    public static readonly Status7 Stopped = new("STOPPED");

    public static readonly Status7 InError = new("IN_ERROR");

    public static readonly Status7 Trained = new("TRAINED");

    public static readonly Status7 TrainedWithWarning = new("TRAINED_WITH_WARNING");

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
