using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Manual review status for failed items
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReviewStatus>))]
public sealed record ReviewStatus : OpenStringEnum<ReviewStatus>
{
    private ReviewStatus(string value) : base(value)
    {
    }

    public static readonly ReviewStatus None = new("None");

    public static readonly ReviewStatus InReview = new("InReview");

    public static readonly ReviewStatus Verified = new("Verified");

    public static readonly ReviewStatus Retried = new("Retried");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onInReview,
        Func<TResult> onVerified,
        Func<TResult> onRetried,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == InReview => onInReview(),
            _ when this == Verified => onVerified(),
            _ when this == Retried => onRetried(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onInReview, Action onVerified, Action onRetried, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == InReview) onInReview();
        else if (this == Verified) onVerified();
        else if (this == Retried) onRetried();
        else otherwise(Value);
    }
}
