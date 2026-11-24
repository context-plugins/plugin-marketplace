using System;
using System.Text.Json.Serialization;
using Lili.Core.Enum;

namespace Lili.Models.Enums;

/// <summary>
/// The type of the webhook
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Onboarding = new("ONBOARDING");

    public static readonly TypeEnum Payment = new("PAYMENT");

    public static readonly TypeEnum All = new("ALL");

    public TResult Match<TResult>(Func<TResult> onOnboarding,
        Func<TResult> onPayment,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Onboarding => onOnboarding(),
            _ when this == Payment => onPayment(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onOnboarding, Action onPayment, Action onAll, Action<string> otherwise)
    {
        if (this == Onboarding) onOnboarding();
        else if (this == Payment) onPayment();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
