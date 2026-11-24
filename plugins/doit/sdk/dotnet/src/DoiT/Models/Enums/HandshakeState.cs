using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// AWS Organizations Handshake <c>State</c> value, lowercased.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HandshakeState>))]
public sealed record HandshakeState : OpenStringEnum<HandshakeState>
{
    private HandshakeState(string value) : base(value)
    {
    }

    public static readonly HandshakeState Requested = new("requested");

    public static readonly HandshakeState Open = new("open");

    public static readonly HandshakeState Canceled = new("canceled");

    public static readonly HandshakeState Accepted = new("accepted");

    public static readonly HandshakeState Declined = new("declined");

    public static readonly HandshakeState Expired = new("expired");

    public TResult Match<TResult>(Func<TResult> onRequested,
        Func<TResult> onOpen,
        Func<TResult> onCanceled,
        Func<TResult> onAccepted,
        Func<TResult> onDeclined,
        Func<TResult> onExpired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Requested => onRequested(),
            _ when this == Open => onOpen(),
            _ when this == Canceled => onCanceled(),
            _ when this == Accepted => onAccepted(),
            _ when this == Declined => onDeclined(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onRequested,
        Action onOpen,
        Action onCanceled,
        Action onAccepted,
        Action onDeclined,
        Action onExpired,
        Action<string> otherwise)
    {
        if (this == Requested) onRequested();
        else if (this == Open) onOpen();
        else if (this == Canceled) onCanceled();
        else if (this == Accepted) onAccepted();
        else if (this == Declined) onDeclined();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
