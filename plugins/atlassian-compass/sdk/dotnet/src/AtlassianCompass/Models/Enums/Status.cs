using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// The status of the pull request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Created = new("CREATED");

    public static readonly Status InReview = new("IN_REVIEW");

    public static readonly Status Merged = new("MERGED");

    public static readonly Status Rejected = new("REJECTED");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onInReview,
        Func<TResult> onMerged,
        Func<TResult> onRejected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == InReview => onInReview(),
            _ when this == Merged => onMerged(),
            _ when this == Rejected => onRejected(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action onInReview, Action onMerged, Action onRejected, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == InReview) onInReview();
        else if (this == Merged) onMerged();
        else if (this == Rejected) onRejected();
        else otherwise(Value);
    }
}
