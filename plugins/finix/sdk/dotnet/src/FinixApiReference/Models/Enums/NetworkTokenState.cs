using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The state of the network token. The possible enum values are as follows:
/// <list type="bullet">
///   <item><description><c>NOT_ENABLED</c>: The <c>network_token_state</c> is <c>NOT_ENABLED</c> when the value of <c>network_token_enabled</c> on the <c>Payment Instrument</c> is <c>false</c>.</description></item>
///   <item><description><c>PENDING</c>: Immediately after Finix enables network tokens for a specific card, <c>network_token_state</c> is initially set to <c>PENDING</c>.</description></item>
///   <item><description><c>ACTIVE</c>: After Finix receives the network token successfully from the card network, <c>network_token_state</c> updates to <c>ACTIVE</c>.</description></item>
///   <item><description><c>FAILED</c>: In the event that there is an issue with the card network such as service becomes unavailable, <c>FAILED</c> is returned.</description></item>
///   <item><description><c>SUSPENDED</c>: When the issuing bank does not allow the network token to be used in transactions, <c>SUSPENDED</c> is returned.</description></item>
///   <item><description><c>CLOSED</c>: In the event that the issuing bank has closed the card permanently, <c>CLOSED</c> is returned.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NetworkTokenState>))]
public sealed record NetworkTokenState : OpenStringEnum<NetworkTokenState>
{
    private NetworkTokenState(string value) : base(value)
    {
    }

    public static readonly NetworkTokenState Active = new("ACTIVE");

    public static readonly NetworkTokenState Closed = new("CLOSED");

    public static readonly NetworkTokenState Enabled = new("ENABLED");

    public static readonly NetworkTokenState Failed = new("FAILED");

    public static readonly NetworkTokenState NotEnabled = new("NOT_ENABLED");

    public static readonly NetworkTokenState Suspended = new("SUSPENDED");

    public static readonly NetworkTokenState Pending = new("PENDING");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onClosed,
        Func<TResult> onEnabled,
        Func<TResult> onFailed,
        Func<TResult> onNotEnabled,
        Func<TResult> onSuspended,
        Func<TResult> onPending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Closed => onClosed(),
            _ when this == Enabled => onEnabled(),
            _ when this == Failed => onFailed(),
            _ when this == NotEnabled => onNotEnabled(),
            _ when this == Suspended => onSuspended(),
            _ when this == Pending => onPending(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive,
        Action onClosed,
        Action onEnabled,
        Action onFailed,
        Action onNotEnabled,
        Action onSuspended,
        Action onPending,
        Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Closed) onClosed();
        else if (this == Enabled) onEnabled();
        else if (this == Failed) onFailed();
        else if (this == NotEnabled) onNotEnabled();
        else if (this == Suspended) onSuspended();
        else if (this == Pending) onPending();
        else otherwise(Value);
    }
}
