using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1DevCycleManagementProjectChangeRequestsApi>))]
public sealed record Status1DevCycleManagementProjectChangeRequestsApi : OpenStringEnum<Status1DevCycleManagementProjectChangeRequestsApi>
{
    private Status1DevCycleManagementProjectChangeRequestsApi(string value) : base(value)
    {
    }

    public static readonly Status1DevCycleManagementProjectChangeRequestsApi Draft = new("draft");

    public static readonly Status1DevCycleManagementProjectChangeRequestsApi Pending = new("pending");

    public static readonly Status1DevCycleManagementProjectChangeRequestsApi Approved = new("approved");

    public static readonly Status1DevCycleManagementProjectChangeRequestsApi Applied = new("applied");

    public static readonly Status1DevCycleManagementProjectChangeRequestsApi Rejected = new("rejected");

    public static readonly Status1DevCycleManagementProjectChangeRequestsApi Cancelled = new("cancelled");

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
