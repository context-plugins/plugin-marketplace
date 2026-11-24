using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TwitterSubType>))]
public sealed record TwitterSubType : OpenStringEnum<TwitterSubType>
{
    private TwitterSubType(string value) : base(value)
    {
    }

    public static readonly TwitterSubType None = new("none");

    public static readonly TwitterSubType Basic = new("basic");

    public static readonly TwitterSubType Premium = new("premium");

    public static readonly TwitterSubType PremiumPlus = new("premium_plus");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onBasic,
        Func<TResult> onPremium,
        Func<TResult> onPremiumPlus,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Basic => onBasic(),
            _ when this == Premium => onPremium(),
            _ when this == PremiumPlus => onPremiumPlus(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onBasic, Action onPremium, Action onPremiumPlus, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Basic) onBasic();
        else if (this == Premium) onPremium();
        else if (this == PremiumPlus) onPremiumPlus();
        else otherwise(Value);
    }
}
