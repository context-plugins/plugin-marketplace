using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details the state of the <c>Dispute</c> and what action the <c>Merchant</c> needs to take. Possible values are:
/// <list type="bullet">
///   <item><description><c>NEEDS_RESPONSE</c>: The <c>Merchant</c> needs to respond to the <c>Dispute</c> by the <c>Dispute#respond_by</c> timestamp. For details on how to respond to a <c>Dispute</c>, see <see href="/guides/after-the-payment/disputes/responding-to-disputes">Responding to Disputes</see>.</description></item>
///   <item><description><c>RESPONDED</c>: The issuing bank has received the evidence and actively reviewing it. No action needed from the <c>Merchant</c>.</description></item>
///   <item><description><c>ACCEPTED</c>: The <c>Merchant</c> has accepted the <c>Dispute</c>. When a <c>Dispute</c> is accepted, you concede that the <c>Dispute</c> is not worth challenging or representing. For details on how to accept a <c>Dispute</c>, see <see href="/guides/after-the-payment/disputes/accepting-disputes/">Accepting a Dispute</see>.</description></item>
///   <item><description><c>NO_RESPONSE_ALLOWED</c>: The final <c>Dispute#response_state</c> when a <c>Dispute</c> is either <c>WON</c> or <c>LOST</c>.</description></item>
///   <item><description><c>UNKNOWN</c>: Occurs when testing <c>Disputes</c> in the sandbox on the <c>DUMMY_V1</c> processor or in production on the <c>VANTIV_V1</c> processor.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResponseState>))]
public sealed record ResponseState : OpenStringEnum<ResponseState>
{
    private ResponseState(string value) : base(value)
    {
    }

    public static readonly ResponseState NeedsResponse = new("NEEDS_RESPONSE");

    public static readonly ResponseState Responded = new("RESPONDED");

    public static readonly ResponseState Accepted = new("ACCEPTED");

    public static readonly ResponseState NoResponseAllowed = new("NO_RESPONSE_ALLOWED");

    public static readonly ResponseState Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onNeedsResponse,
        Func<TResult> onResponded,
        Func<TResult> onAccepted,
        Func<TResult> onNoResponseAllowed,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NeedsResponse => onNeedsResponse(),
            _ when this == Responded => onResponded(),
            _ when this == Accepted => onAccepted(),
            _ when this == NoResponseAllowed => onNoResponseAllowed(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onNeedsResponse,
        Action onResponded,
        Action onAccepted,
        Action onNoResponseAllowed,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == NeedsResponse) onNeedsResponse();
        else if (this == Responded) onResponded();
        else if (this == Accepted) onAccepted();
        else if (this == NoResponseAllowed) onNoResponseAllowed();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
