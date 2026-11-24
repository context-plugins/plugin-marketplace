using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The state of the BGP peer. The following are the possible values: verifying: The BGP peering addresses or ASN require validation before the BGP peer can be created. This state applies only to public virtual interfaces. pending: The BGP peer is created, and remains in this state until it is ready to be established. available: The BGP peer is ready to be established. deleting: The BGP peer is being deleted. deleted: The BGP peer is deleted and cannot be established.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BgpPeerState>))]
public sealed record BgpPeerState : OpenStringEnum<BgpPeerState>
{
    private BgpPeerState(string value) : base(value)
    {
    }

    public static readonly BgpPeerState Verifying = new("verifying");

    public static readonly BgpPeerState Pending = new("pending");

    public static readonly BgpPeerState Available = new("available");

    public static readonly BgpPeerState Deleting = new("deleting");

    public static readonly BgpPeerState Deleted = new("deleted");

    public TResult Match<TResult>(Func<TResult> onVerifying,
        Func<TResult> onPending,
        Func<TResult> onAvailable,
        Func<TResult> onDeleting,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Verifying => onVerifying(),
            _ when this == Pending => onPending(),
            _ when this == Available => onAvailable(),
            _ when this == Deleting => onDeleting(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onVerifying,
        Action onPending,
        Action onAvailable,
        Action onDeleting,
        Action onDeleted,
        Action<string> otherwise)
    {
        if (this == Verifying) onVerifying();
        else if (this == Pending) onPending();
        else if (this == Available) onAvailable();
        else if (this == Deleting) onDeleting();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
