using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Outcome>))]
public sealed record Outcome : OpenStringEnum<Outcome>
{
    private Outcome(string value) : base(value)
    {
    }

    public static readonly Outcome Approved = new("approved");

    public static readonly Outcome Rejected = new("rejected");

    public static readonly Outcome ChangesRequested = new("changes_requested");

    public static readonly Outcome Cancelled = new("cancelled");

    public static readonly Outcome Expired = new("expired");

    public TResult Match<TResult>(Func<TResult> onApproved,
        Func<TResult> onRejected,
        Func<TResult> onChangesRequested,
        Func<TResult> onCancelled,
        Func<TResult> onExpired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approved => onApproved(),
            _ when this == Rejected => onRejected(),
            _ when this == ChangesRequested => onChangesRequested(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onApproved,
        Action onRejected,
        Action onChangesRequested,
        Action onCancelled,
        Action onExpired,
        Action<string> otherwise)
    {
        if (this == Approved) onApproved();
        else if (this == Rejected) onRejected();
        else if (this == ChangesRequested) onChangesRequested();
        else if (this == Cancelled) onCancelled();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
