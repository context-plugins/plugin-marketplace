using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// The state of a sync draft. New values may be added, so treat an unknown
/// value as closed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SyncDraftStatus>))]
public sealed record SyncDraftStatus : OpenStringEnum<SyncDraftStatus>
{
    private SyncDraftStatus(string value) : base(value)
    {
    }

    public static readonly SyncDraftStatus Pending = new("pending");

    public static readonly SyncDraftStatus Approved = new("approved");

    public static readonly SyncDraftStatus Rejected = new("rejected");

    public static readonly SyncDraftStatus Canceled = new("canceled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onApproved,
        Func<TResult> onRejected,
        Func<TResult> onCanceled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Approved => onApproved(),
            _ when this == Rejected => onRejected(),
            _ when this == Canceled => onCanceled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onApproved,
        Action onRejected,
        Action onCanceled,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Approved) onApproved();
        else if (this == Rejected) onRejected();
        else if (this == Canceled) onCanceled();
        else otherwise(Value);
    }
}
