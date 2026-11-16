using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Indicates the period within a subscription where specific rules apply.
/// <list type="bullet">
///   <item><description><c>EVERGREEN</c> - The buyer is billed continuously for the subscription until the subscription is canceled.</description></item>
///   <item><description><c>DISCOUNT</c> - The buyer receives a discounted price for a limited billing interval, after which the customer is charged the full subscription amount.</description></item>
///   <item><description><c>FIXED</c> state - Applicable to fixed-length subscriptions.</description></item>
///   <item><description><c>NONE</c> - Indicates that when the <c>start_subscription_at</c> timestamp is set during subscription creation, the subscription is not yet in any phase, and billing has not started.</description></item>
///   <item><description><c>TRIAL</c> - The period during which the buyer is not billed; after this phase, the buyer will begin being billed.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionPhase>))]
public sealed record SubscriptionPhase : OpenStringEnum<SubscriptionPhase>
{
    private SubscriptionPhase(string value) : base(value)
    {
    }

    public static readonly SubscriptionPhase Evergreen = new("EVERGREEN");

    public static readonly SubscriptionPhase Discount = new("DISCOUNT");

    public static readonly SubscriptionPhase Fixed = new("FIXED");

    public static readonly SubscriptionPhase None = new("NONE");

    public static readonly SubscriptionPhase Trial = new("TRIAL");

    public TResult Match<TResult>(Func<TResult> onEvergreen,
        Func<TResult> onDiscount,
        Func<TResult> onFixed,
        Func<TResult> onNone,
        Func<TResult> onTrial,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Evergreen => onEvergreen(),
            _ when this == Discount => onDiscount(),
            _ when this == Fixed => onFixed(),
            _ when this == None => onNone(),
            _ when this == Trial => onTrial(),
            _ => otherwise(Value)
        };

    public void Match(Action onEvergreen,
        Action onDiscount,
        Action onFixed,
        Action onNone,
        Action onTrial,
        Action<string> otherwise)
    {
        if (this == Evergreen) onEvergreen();
        else if (this == Discount) onDiscount();
        else if (this == Fixed) onFixed();
        else if (this == None) onNone();
        else if (this == Trial) onTrial();
        else otherwise(Value);
    }
}
