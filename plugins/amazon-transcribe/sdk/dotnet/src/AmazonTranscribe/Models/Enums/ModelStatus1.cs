using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The status of the specified custom language model. When the status displays as COMPLETED the model is ready for use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ModelStatus1>))]
public sealed record ModelStatus1 : OpenStringEnum<ModelStatus1>
{
    private ModelStatus1(string value) : base(value)
    {
    }

    public static readonly ModelStatus1 InProgress = new("IN_PROGRESS");

    public static readonly ModelStatus1 Failed = new("FAILED");

    public static readonly ModelStatus1 Completed = new("COMPLETED");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onFailed,
        Func<TResult> onCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Failed => onFailed(),
            _ when this == Completed => onCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onFailed, Action onCompleted, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Failed) onFailed();
        else if (this == Completed) onCompleted();
        else otherwise(Value);
    }
}
