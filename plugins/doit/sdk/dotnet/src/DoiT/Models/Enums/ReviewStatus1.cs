using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The anomaly's review state.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReviewStatus1>))]
public sealed record ReviewStatus1 : OpenStringEnum<ReviewStatus1>
{
    private ReviewStatus1(string value) : base(value)
    {
    }

    public static readonly ReviewStatus1 NeedsReview = new("NEEDS_REVIEW");

    public static readonly ReviewStatus1 UnderReview = new("UNDER_REVIEW");

    public static readonly ReviewStatus1 Resolved = new("RESOLVED");

    public TResult Match<TResult>(Func<TResult> onNeedsReview,
        Func<TResult> onUnderReview,
        Func<TResult> onResolved,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NeedsReview => onNeedsReview(),
            _ when this == UnderReview => onUnderReview(),
            _ when this == Resolved => onResolved(),
            _ => otherwise(Value)
        };

    public void Match(Action onNeedsReview, Action onUnderReview, Action onResolved, Action<string> otherwise)
    {
        if (this == NeedsReview) onNeedsReview();
        else if (this == UnderReview) onUnderReview();
        else if (this == Resolved) onResolved();
        else otherwise(Value);
    }
}
