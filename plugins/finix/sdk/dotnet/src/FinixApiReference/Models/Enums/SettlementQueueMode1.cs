using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Set to <c>MANUAL</c> to enable the <c>Merchant</c> to use the Settlement Queue.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SettlementQueueMode1>))]
public sealed record SettlementQueueMode1 : OpenStringEnum<SettlementQueueMode1>
{
    private SettlementQueueMode1(string value) : base(value)
    {
    }

    public static readonly SettlementQueueMode1 Manual = new("MANUAL");

    public static readonly SettlementQueueMode1 Unset = new("UNSET");

    public TResult Match<TResult>(Func<TResult> onManual, Func<TResult> onUnset, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Manual => onManual(),
            _ when this == Unset => onUnset(),
            _ => otherwise(Value)
        };

    public void Match(Action onManual, Action onUnset, Action<string> otherwise)
    {
        if (this == Manual) onManual();
        else if (this == Unset) onUnset();
        else otherwise(Value);
    }
}
