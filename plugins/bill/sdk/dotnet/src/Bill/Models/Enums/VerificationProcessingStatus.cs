using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Enum for risk verification processing status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VerificationProcessingStatus>))]
public sealed record VerificationProcessingStatus : OpenStringEnum<VerificationProcessingStatus>
{
    private VerificationProcessingStatus(string value) : base(value)
    {
    }

    public static readonly VerificationProcessingStatus InProgress = new("IN_PROGRESS");

    public static readonly VerificationProcessingStatus Completed = new("COMPLETED");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onCompleted, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else otherwise(Value);
    }
}
