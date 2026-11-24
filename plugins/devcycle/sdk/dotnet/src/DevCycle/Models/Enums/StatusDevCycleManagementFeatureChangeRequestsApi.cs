using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Status of the Feature
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDevCycleManagementFeatureChangeRequestsApi>))]
public sealed record StatusDevCycleManagementFeatureChangeRequestsApi : OpenStringEnum<StatusDevCycleManagementFeatureChangeRequestsApi>
{
    private StatusDevCycleManagementFeatureChangeRequestsApi(string value) : base(value)
    {
    }

    public static readonly StatusDevCycleManagementFeatureChangeRequestsApi Draft = new("draft");

    public static readonly StatusDevCycleManagementFeatureChangeRequestsApi Pending = new("pending");

    public static readonly StatusDevCycleManagementFeatureChangeRequestsApi Approved = new("approved");

    public static readonly StatusDevCycleManagementFeatureChangeRequestsApi Applied = new("applied");

    public static readonly StatusDevCycleManagementFeatureChangeRequestsApi Rejected = new("rejected");

    public static readonly StatusDevCycleManagementFeatureChangeRequestsApi Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onPending,
        Func<TResult> onApproved,
        Func<TResult> onApplied,
        Func<TResult> onRejected,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Pending => onPending(),
            _ when this == Approved => onApproved(),
            _ when this == Applied => onApplied(),
            _ when this == Rejected => onRejected(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onPending,
        Action onApproved,
        Action onApplied,
        Action onRejected,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Pending) onPending();
        else if (this == Approved) onApproved();
        else if (this == Applied) onApplied();
        else if (this == Rejected) onRejected();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
