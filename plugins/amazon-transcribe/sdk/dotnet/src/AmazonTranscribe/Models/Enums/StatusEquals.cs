using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Returns only custom language models with the specified status. Language models are ordered by creation date, with the newest model first. If you do not include StatusEquals, all custom language models are returned.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusEquals>))]
public sealed record StatusEquals : OpenStringEnum<StatusEquals>
{
    private StatusEquals(string value) : base(value)
    {
    }

    public static readonly StatusEquals InProgress = new("IN_PROGRESS");

    public static readonly StatusEquals Failed = new("FAILED");

    public static readonly StatusEquals Completed = new("COMPLETED");

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
