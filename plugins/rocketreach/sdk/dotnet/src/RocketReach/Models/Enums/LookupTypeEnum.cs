using System;
using System.Text.Json.Serialization;
using RocketReach.Core.Enum;

namespace RocketReach.Models.Enums;

/// <summary>
/// <list type="bullet">
///   <item><description><c>standard</c> - standard</description></item>
///   <item><description><c>premium</c> - premium</description></item>
///   <item><description><c>premium (feeds disabled)</c> - premium (feeds disabled)</description></item>
///   <item><description><c>bulk</c> - bulk</description></item>
///   <item><description><c>phone</c> - phone</description></item>
///   <item><description><c>enrich</c> - enrich</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LookupTypeEnum>))]
public sealed record LookupTypeEnum : OpenStringEnum<LookupTypeEnum>
{
    private LookupTypeEnum(string value) : base(value)
    {
    }

    public static readonly LookupTypeEnum Standard = new("standard");

    public static readonly LookupTypeEnum Premium = new("premium");

    public static readonly LookupTypeEnum PremiumFeedsDisabled = new("premium (feeds disabled)");

    public static readonly LookupTypeEnum Bulk = new("bulk");

    public static readonly LookupTypeEnum Phone = new("phone");

    public static readonly LookupTypeEnum Enrich = new("enrich");

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
