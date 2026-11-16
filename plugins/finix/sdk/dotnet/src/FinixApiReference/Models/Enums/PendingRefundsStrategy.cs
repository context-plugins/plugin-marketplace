using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The strategy used to hold refunds for this <c>Merchant</c>. Refunds stay in <c>PENDING</c> until the merchant's settlement balance covers them. For more information, see <see href="/guides/after-the-payment/refunds/pending-refunds">Pending refunds</see>.
/// <para>
/// <c>ROLE_PARTNER</c> credentials can set the following strategies:
/// - <c>SEVEN_DAY_DELAYED_ADJUSTMENT</c>: Refunds are held in <c>PENDING</c> for up to 7 days to be covered by settlement funds. After 7 days, Finix debits the merchant's bank account to cover the refund.
/// - <c>SAME_DAY_ADJUSTMENT</c>: Finix issues a debit adjustment near settlement close if the settlement can't cover the refund.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PendingRefundsStrategy>))]
public sealed record PendingRefundsStrategy : OpenStringEnum<PendingRefundsStrategy>
{
    private PendingRefundsStrategy(string value) : base(value)
    {
    }

    public static readonly PendingRefundsStrategy None = new("NONE");

    public static readonly PendingRefundsStrategy SevenDayDelayedAdjustment = new("SEVEN_DAY_DELAYED_ADJUSTMENT");

    public static readonly PendingRefundsStrategy SameDayAdjustment = new("SAME_DAY_ADJUSTMENT");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onSevenDayDelayedAdjustment,
        Func<TResult> onSameDayAdjustment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == SevenDayDelayedAdjustment => onSevenDayDelayedAdjustment(),
            _ when this == SameDayAdjustment => onSameDayAdjustment(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone,
        Action onSevenDayDelayedAdjustment,
        Action onSameDayAdjustment,
        Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == SevenDayDelayedAdjustment) onSevenDayDelayedAdjustment();
        else if (this == SameDayAdjustment) onSameDayAdjustment();
        else otherwise(Value);
    }
}
