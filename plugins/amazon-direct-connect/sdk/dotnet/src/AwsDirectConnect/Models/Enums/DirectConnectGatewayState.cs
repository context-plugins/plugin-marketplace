using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The state of the Direct Connect gateway. The following are the possible values: pending: The initial state after calling CreateDirectConnectGateway. available: The Direct Connect gateway is ready for use. deleting: The initial state after calling DeleteDirectConnectGateway. deleted: The Direct Connect gateway is deleted and cannot pass traffic.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DirectConnectGatewayState>))]
public sealed record DirectConnectGatewayState : OpenStringEnum<DirectConnectGatewayState>
{
    private DirectConnectGatewayState(string value) : base(value)
    {
    }

    public static readonly DirectConnectGatewayState Pending = new("pending");

    public static readonly DirectConnectGatewayState Available = new("available");

    public static readonly DirectConnectGatewayState Deleting = new("deleting");

    public static readonly DirectConnectGatewayState Deleted = new("deleted");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onAvailable,
        Func<TResult> onDeleting,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Available => onAvailable(),
            _ when this == Deleting => onDeleting(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onAvailable,
        Action onDeleting,
        Action onDeleted,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Available) onAvailable();
        else if (this == Deleting) onDeleting();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
