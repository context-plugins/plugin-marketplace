using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. State of the endpoint attachment connection to the service attachment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConnectionState>))]
public sealed record ConnectionState : OpenStringEnum<ConnectionState>
{
    private ConnectionState(string value) : base(value)
    {
    }

    public static readonly ConnectionState ConnectionStateUnspecified = new("CONNECTION_STATE_UNSPECIFIED");

    public static readonly ConnectionState Unavailable = new("UNAVAILABLE");

    public static readonly ConnectionState Pending = new("PENDING");

    public static readonly ConnectionState Accepted = new("ACCEPTED");

    public static readonly ConnectionState Rejected = new("REJECTED");

    public static readonly ConnectionState Closed = new("CLOSED");

    public static readonly ConnectionState Frozen = new("FROZEN");

    public static readonly ConnectionState NeedsAttention = new("NEEDS_ATTENTION");

    public static readonly ConnectionState AcceptedLimitedCapacity = new("ACCEPTED_LIMITED_CAPACITY");

    public TResult Match<TResult>(Func<TResult> onConnectionStateUnspecified,
        Func<TResult> onUnavailable,
        Func<TResult> onPending,
        Func<TResult> onAccepted,
        Func<TResult> onRejected,
        Func<TResult> onClosed,
        Func<TResult> onFrozen,
        Func<TResult> onNeedsAttention,
        Func<TResult> onAcceptedLimitedCapacity,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ConnectionStateUnspecified => onConnectionStateUnspecified(),
            _ when this == Unavailable => onUnavailable(),
            _ when this == Pending => onPending(),
            _ when this == Accepted => onAccepted(),
            _ when this == Rejected => onRejected(),
            _ when this == Closed => onClosed(),
            _ when this == Frozen => onFrozen(),
            _ when this == NeedsAttention => onNeedsAttention(),
            _ when this == AcceptedLimitedCapacity => onAcceptedLimitedCapacity(),
            _ => otherwise(Value)
        };

    public void Match(Action onConnectionStateUnspecified,
        Action onUnavailable,
        Action onPending,
        Action onAccepted,
        Action onRejected,
        Action onClosed,
        Action onFrozen,
        Action onNeedsAttention,
        Action onAcceptedLimitedCapacity,
        Action<string> otherwise)
    {
        if (this == ConnectionStateUnspecified) onConnectionStateUnspecified();
        else if (this == Unavailable) onUnavailable();
        else if (this == Pending) onPending();
        else if (this == Accepted) onAccepted();
        else if (this == Rejected) onRejected();
        else if (this == Closed) onClosed();
        else if (this == Frozen) onFrozen();
        else if (this == NeedsAttention) onNeedsAttention();
        else if (this == AcceptedLimitedCapacity) onAcceptedLimitedCapacity();
        else otherwise(Value);
    }
}
