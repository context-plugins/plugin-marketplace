using System;
using System.Text.Json.Serialization;
using RocketReach.Core.Enum;

namespace RocketReach.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<LookupType>))]
public sealed record LookupType : OpenStringEnum<LookupType>
{
    private LookupType(string value) : base(value)
    {
    }

    public static readonly LookupType Standard = new("standard");

    public static readonly LookupType Premium = new("premium");

    public static readonly LookupType PremiumFeedsDisabled = new("premium (feeds disabled)");

    public static readonly LookupType Bulk = new("bulk");

    public static readonly LookupType Phone = new("phone");

    public static readonly LookupType Enrich = new("enrich");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onPremium,
        Func<TResult> onPremiumFeedsDisabled,
        Func<TResult> onBulk,
        Func<TResult> onPhone,
        Func<TResult> onEnrich,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Premium => onPremium(),
            _ when this == PremiumFeedsDisabled => onPremiumFeedsDisabled(),
            _ when this == Bulk => onBulk(),
            _ when this == Phone => onPhone(),
            _ when this == Enrich => onEnrich(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard,
        Action onPremium,
        Action onPremiumFeedsDisabled,
        Action onBulk,
        Action onPhone,
        Action onEnrich,
        Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Premium) onPremium();
        else if (this == PremiumFeedsDisabled) onPremiumFeedsDisabled();
        else if (this == Bulk) onBulk();
        else if (this == Phone) onPhone();
        else if (this == Enrich) onEnrich();
        else otherwise(Value);
    }
}
