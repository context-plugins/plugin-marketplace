using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of entity that initiated the <c>Transfer Attempt</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntityType5>))]
public sealed record EntityType5 : OpenStringEnum<EntityType5>
{
    private EntityType5(string value) : base(value)
    {
    }

    public static readonly EntityType5 PaymentLink = new("PAYMENT_LINK");

    public TResult Match<TResult>(Func<TResult> onPaymentLink, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PaymentLink => onPaymentLink(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaymentLink, Action<string> otherwise)
    {
        if (this == PaymentLink) onPaymentLink();
        else otherwise(Value);
    }
}
