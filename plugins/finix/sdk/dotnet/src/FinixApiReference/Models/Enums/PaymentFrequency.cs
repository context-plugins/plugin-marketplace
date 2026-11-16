using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Whether the <c>Payment Link</c> associated with the <c>Transfer Attempt</c> is single-use or recurring.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentFrequency>))]
public sealed record PaymentFrequency : OpenStringEnum<PaymentFrequency>
{
    private PaymentFrequency(string value) : base(value)
    {
    }

    public static readonly PaymentFrequency OneTime = new("ONE_TIME");

    public static readonly PaymentFrequency Recurring = new("RECURRING");

    public TResult Match<TResult>(Func<TResult> onOneTime,
        Func<TResult> onRecurring,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OneTime => onOneTime(),
            _ when this == Recurring => onRecurring(),
            _ => otherwise(Value)
        };

    public void Match(Action onOneTime, Action onRecurring, Action<string> otherwise)
    {
        if (this == OneTime) onOneTime();
        else if (this == Recurring) onRecurring();
        else otherwise(Value);
    }
}
