using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The current overall state of the <c>Dispute</c>. Disputes are initially created with a <c>PENDING</c> state. The decision of the issuing bank is final for all parties. Possible values include:
/// <para>
/// - <c>INQUIRY</c>: The <c>Dispute</c> is being reviewed by the buyer's issuing bank. No changes can be made while in this state. If a <c>Dispute</c> reaches this state, the bank is requesting additional information from the seller to prove the transaction was legitimate.
/// - <c>PENDING</c>: The default initial state of a <c>Dispute</c>. It also acts as a transitional state after an accept request is submitted. The state will eventually change based on the transaction type:
///   - For a dispute on a <b>sale</b>: Changes to <c>LOST</c> when accepted.
///   - For a dispute on a <b>refund</b>: Changes to <c>WON</c> when accepted.
/// - <c>LOST</c>: The <c>Dispute</c> is lost, and the cardholder keeps the credit. No further changes can be made.
/// - <c>WON</c>: The <c>Dispute</c> is won, the credit is reversed, and funds are returned to the <c>Merchant</c>. No further changes can be made.
/// For more details, see <see href="/guides/after-the-payment/disputes/dispute-states">Dispute States</see>.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State4>))]
public sealed record State4 : OpenStringEnum<State4>
{
    private State4(string value) : base(value)
    {
    }

    public static readonly State4 Inquiry = new("INQUIRY");

    public static readonly State4 Pending = new("PENDING");

    public static readonly State4 Lost = new("LOST");

    public static readonly State4 Won = new("WON");

    public TResult Match<TResult>(Func<TResult> onInquiry,
        Func<TResult> onPending,
        Func<TResult> onLost,
        Func<TResult> onWon,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Inquiry => onInquiry(),
            _ when this == Pending => onPending(),
            _ when this == Lost => onLost(),
            _ when this == Won => onWon(),
            _ => otherwise(Value)
        };

    public void Match(Action onInquiry, Action onPending, Action onLost, Action onWon, Action<string> otherwise)
    {
        if (this == Inquiry) onInquiry();
        else if (this == Pending) onPending();
        else if (this == Lost) onLost();
        else if (this == Won) onWon();
        else otherwise(Value);
    }
}
