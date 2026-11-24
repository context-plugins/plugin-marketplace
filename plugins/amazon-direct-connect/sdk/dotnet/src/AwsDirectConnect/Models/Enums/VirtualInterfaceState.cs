using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The state of the virtual interface. The following are the possible values: confirming: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner. verifying: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created. pending: A virtual interface is in this s
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VirtualInterfaceState>))]
public sealed record VirtualInterfaceState : OpenStringEnum<VirtualInterfaceState>
{
    private VirtualInterfaceState(string value) : base(value)
    {
    }

    public static readonly VirtualInterfaceState Confirming = new("confirming");

    public static readonly VirtualInterfaceState Verifying = new("verifying");

    public static readonly VirtualInterfaceState Pending = new("pending");

    public static readonly VirtualInterfaceState Available = new("available");

    public static readonly VirtualInterfaceState Down = new("down");

    public static readonly VirtualInterfaceState Testing = new("testing");

    public static readonly VirtualInterfaceState Deleting = new("deleting");

    public static readonly VirtualInterfaceState Deleted = new("deleted");

    public static readonly VirtualInterfaceState Rejected = new("rejected");

    public static readonly VirtualInterfaceState Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onConfirming,
        Func<TResult> onVerifying,
        Func<TResult> onPending,
        Func<TResult> onAvailable,
        Func<TResult> onDown,
        Func<TResult> onTesting,
        Func<TResult> onDeleting,
        Func<TResult> onDeleted,
        Func<TResult> onRejected,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Confirming => onConfirming(),
            _ when this == Verifying => onVerifying(),
            _ when this == Pending => onPending(),
            _ when this == Available => onAvailable(),
            _ when this == Down => onDown(),
            _ when this == Testing => onTesting(),
            _ when this == Deleting => onDeleting(),
            _ when this == Deleted => onDeleted(),
            _ when this == Rejected => onRejected(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onConfirming,
        Action onVerifying,
        Action onPending,
        Action onAvailable,
        Action onDown,
        Action onTesting,
        Action onDeleting,
        Action onDeleted,
        Action onRejected,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Confirming) onConfirming();
        else if (this == Verifying) onVerifying();
        else if (this == Pending) onPending();
        else if (this == Available) onAvailable();
        else if (this == Down) onDown();
        else if (this == Testing) onTesting();
        else if (this == Deleting) onDeleting();
        else if (this == Deleted) onDeleted();
        else if (this == Rejected) onRejected();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
