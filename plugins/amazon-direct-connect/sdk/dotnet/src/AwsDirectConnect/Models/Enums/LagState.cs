using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The state of the LAG. The following are the possible values: requested: The initial state of a LAG. The LAG stays in the requested state until the Letter of Authorization (LOA) is available. pending: The LAG has been approved and is being initialized. available: The network link is established and the LAG is ready for use. down: The network link is down. deleting: The LAG is being deleted. deleted: The LAG is deleted. unknown: The state of the LAG is not available.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LagState>))]
public sealed record LagState : OpenStringEnum<LagState>
{
    private LagState(string value) : base(value)
    {
    }

    public static readonly LagState Requested = new("requested");

    public static readonly LagState Pending = new("pending");

    public static readonly LagState Available = new("available");

    public static readonly LagState Down = new("down");

    public static readonly LagState Deleting = new("deleting");

    public static readonly LagState Deleted = new("deleted");

    public static readonly LagState Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onRequested,
        Func<TResult> onPending,
        Func<TResult> onAvailable,
        Func<TResult> onDown,
        Func<TResult> onDeleting,
        Func<TResult> onDeleted,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Requested => onRequested(),
            _ when this == Pending => onPending(),
            _ when this == Available => onAvailable(),
            _ when this == Down => onDown(),
            _ when this == Deleting => onDeleting(),
            _ when this == Deleted => onDeleted(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onRequested,
        Action onPending,
        Action onAvailable,
        Action onDown,
        Action onDeleting,
        Action onDeleted,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Requested) onRequested();
        else if (this == Pending) onPending();
        else if (this == Available) onAvailable();
        else if (this == Down) onDown();
        else if (this == Deleting) onDeleting();
        else if (this == Deleted) onDeleted();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
