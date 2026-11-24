using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusBundleSocialOrganizationApi>))]
public sealed record StatusBundleSocialOrganizationApi : OpenStringEnum<StatusBundleSocialOrganizationApi>
{
    private StatusBundleSocialOrganizationApi(string value) : base(value)
    {
    }

    public static readonly StatusBundleSocialOrganizationApi Trialing = new("trialing");

    public static readonly StatusBundleSocialOrganizationApi Active = new("active");

    public static readonly StatusBundleSocialOrganizationApi Canceled = new("canceled");

    public static readonly StatusBundleSocialOrganizationApi Incomplete = new("incomplete");

    public static readonly StatusBundleSocialOrganizationApi IncompleteExpired = new("incomplete_expired");

    public static readonly StatusBundleSocialOrganizationApi PastDue = new("past_due");

    public static readonly StatusBundleSocialOrganizationApi Unpaid = new("unpaid");

    public static readonly StatusBundleSocialOrganizationApi Paused = new("paused");

    public TResult Match<TResult>(Func<TResult> onTrialing,
        Func<TResult> onActive,
        Func<TResult> onCanceled,
        Func<TResult> onIncomplete,
        Func<TResult> onIncompleteExpired,
        Func<TResult> onPastDue,
        Func<TResult> onUnpaid,
        Func<TResult> onPaused,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Trialing => onTrialing(),
            _ when this == Active => onActive(),
            _ when this == Canceled => onCanceled(),
            _ when this == Incomplete => onIncomplete(),
            _ when this == IncompleteExpired => onIncompleteExpired(),
            _ when this == PastDue => onPastDue(),
            _ when this == Unpaid => onUnpaid(),
            _ when this == Paused => onPaused(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrialing,
        Action onActive,
        Action onCanceled,
        Action onIncomplete,
        Action onIncompleteExpired,
        Action onPastDue,
        Action onUnpaid,
        Action onPaused,
        Action<string> otherwise)
    {
        if (this == Trialing) onTrialing();
        else if (this == Active) onActive();
        else if (this == Canceled) onCanceled();
        else if (this == Incomplete) onIncomplete();
        else if (this == IncompleteExpired) onIncompleteExpired();
        else if (this == PastDue) onPastDue();
        else if (this == Unpaid) onUnpaid();
        else if (this == Paused) onPaused();
        else otherwise(Value);
    }
}
