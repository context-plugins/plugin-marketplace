using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Status of the invitation from customer/vendor to an organization.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NetworkInvitationStatus>))]
public sealed record NetworkInvitationStatus : OpenStringEnum<NetworkInvitationStatus>
{
    private NetworkInvitationStatus(string value) : base(value)
    {
    }

    public static readonly NetworkInvitationStatus NotConnected = new("NOT_CONNECTED");

    public static readonly NetworkInvitationStatus Pending = new("PENDING");

    public static readonly NetworkInvitationStatus Connected = new("CONNECTED");

    public static readonly NetworkInvitationStatus ConnectedRpps = new("CONNECTED_RPPS");

    public TResult Match<TResult>(Func<TResult> onNotConnected,
        Func<TResult> onPending,
        Func<TResult> onConnected,
        Func<TResult> onConnectedRpps,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotConnected => onNotConnected(),
            _ when this == Pending => onPending(),
            _ when this == Connected => onConnected(),
            _ when this == ConnectedRpps => onConnectedRpps(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotConnected,
        Action onPending,
        Action onConnected,
        Action onConnectedRpps,
        Action<string> otherwise)
    {
        if (this == NotConnected) onNotConnected();
        else if (this == Pending) onPending();
        else if (this == Connected) onConnected();
        else if (this == ConnectedRpps) onConnectedRpps();
        else otherwise(Value);
    }
}
