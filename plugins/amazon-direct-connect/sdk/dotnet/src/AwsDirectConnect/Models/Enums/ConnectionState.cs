using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The state of the connection. The following are the possible values: ordering: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order. requested: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer. pending: The connection has been approved and is being initialized. available: The network link is up and the connection is ready for use. down: The network l
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConnectionState>))]
public sealed record ConnectionState : OpenStringEnum<ConnectionState>
{
    private ConnectionState(string value) : base(value)
    {
    }

    public static readonly ConnectionState Ordering = new("ordering");

    public static readonly ConnectionState Requested = new("requested");

    public static readonly ConnectionState Pending = new("pending");

    public static readonly ConnectionState Available = new("available");

    public static readonly ConnectionState Down = new("down");

    public static readonly ConnectionState Deleting = new("deleting");

    public static readonly ConnectionState Deleted = new("deleted");

    public static readonly ConnectionState Rejected = new("rejected");

    public static readonly ConnectionState Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onOrdering,
        Func<TResult> onRequested,
        Func<TResult> onPending,
        Func<TResult> onAvailable,
        Func<TResult> onDown,
        Func<TResult> onDeleting,
        Func<TResult> onDeleted,
        Func<TResult> onRejected,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ordering => onOrdering(),
            _ when this == Requested => onRequested(),
            _ when this == Pending => onPending(),
            _ when this == Available => onAvailable(),
            _ when this == Down => onDown(),
            _ when this == Deleting => onDeleting(),
            _ when this == Deleted => onDeleted(),
            _ when this == Rejected => onRejected(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onOrdering,
        Action onRequested,
        Action onPending,
        Action onAvailable,
        Action onDown,
        Action onDeleting,
        Action onDeleted,
        Action onRejected,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Ordering) onOrdering();
        else if (this == Requested) onRequested();
        else if (this == Pending) onPending();
        else if (this == Available) onAvailable();
        else if (this == Down) onDown();
        else if (this == Deleting) onDeleting();
        else if (this == Deleted) onDeleted();
        else if (this == Rejected) onRejected();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
