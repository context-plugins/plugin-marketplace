using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// If <c>settlement_queue_mode</c> is set to <c>MANUAL</c>, Finix will automatically place all transactions (Sales, Fees, Refunds, and ACH Returns) into a settlement queue that you can manage. Each transaction will have a <c>Settlement Queue Entry</c>.
/// <para>
/// When a <c>Settlement Queue Entry</c> is created, it will not be placed into <c>Settlement</c> until the <c>Settlement Queue Entry</c> is explicitly released.
/// </para>
/// <para>
/// Note: We require the release of all settlement queue entries within 30 days of creation.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SettlementQueueMode>))]
public sealed record SettlementQueueMode : OpenStringEnum<SettlementQueueMode>
{
    private SettlementQueueMode(string value) : base(value)
    {
    }

    public static readonly SettlementQueueMode Unset = new("UNSET");

    public static readonly SettlementQueueMode Manual = new("MANUAL");

    public TResult Match<TResult>(Func<TResult> onUnset, Func<TResult> onManual, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unset => onUnset(),
            _ when this == Manual => onManual(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnset, Action onManual, Action<string> otherwise)
    {
        if (this == Unset) onUnset();
        else if (this == Manual) onManual();
        else otherwise(Value);
    }
}
