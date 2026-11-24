using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Current activation status. Progresses from requested → under_review → activated. needs_clarification requires additional info from the merchant.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActivationStatus>))]
public sealed record ActivationStatus : OpenStringEnum<ActivationStatus>
{
    private ActivationStatus(string value) : base(value)
    {
    }

    public static readonly ActivationStatus Requested = new("requested");

    public static readonly ActivationStatus NeedsClarification = new("needs_clarification");

    public static readonly ActivationStatus UnderReview = new("under_review");

    public static readonly ActivationStatus Activated = new("activated");

    public static readonly ActivationStatus Suspended = new("suspended");

    public TResult Match<TResult>(Func<TResult> onRequested,
        Func<TResult> onNeedsClarification,
        Func<TResult> onUnderReview,
        Func<TResult> onActivated,
        Func<TResult> onSuspended,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Requested => onRequested(),
            _ when this == NeedsClarification => onNeedsClarification(),
            _ when this == UnderReview => onUnderReview(),
            _ when this == Activated => onActivated(),
            _ when this == Suspended => onSuspended(),
            _ => otherwise(Value)
        };

    public void Match(Action onRequested,
        Action onNeedsClarification,
        Action onUnderReview,
        Action onActivated,
        Action onSuspended,
        Action<string> otherwise)
    {
        if (this == Requested) onRequested();
        else if (this == NeedsClarification) onNeedsClarification();
        else if (this == UnderReview) onUnderReview();
        else if (this == Activated) onActivated();
        else if (this == Suspended) onSuspended();
        else otherwise(Value);
    }
}
