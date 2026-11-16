using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of entity that initiated the <c>Transfer Attempt</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntityType4>))]
public sealed record EntityType4 : OpenStringEnum<EntityType4>
{
    private EntityType4(string value) : base(value)
    {
    }

    public static readonly EntityType4 CheckoutForm = new("CHECKOUT_FORM");

    public TResult Match<TResult>(Func<TResult> onCheckoutForm, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CheckoutForm => onCheckoutForm(),
            _ => otherwise(Value)
        };

    public void Match(Action onCheckoutForm, Action<string> otherwise)
    {
        if (this == CheckoutForm) onCheckoutForm();
        else otherwise(Value);
    }
}
