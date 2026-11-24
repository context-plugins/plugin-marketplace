using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Condition filter. 'nwt' = New With Tags only.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConditionCompSniperMarketplaceAndShippingPoshmarkApi>))]
public sealed record ConditionCompSniperMarketplaceAndShippingPoshmarkApi : OpenStringEnum<ConditionCompSniperMarketplaceAndShippingPoshmarkApi>
{
    private ConditionCompSniperMarketplaceAndShippingPoshmarkApi(string value) : base(value)
    {
    }

    public static readonly ConditionCompSniperMarketplaceAndShippingPoshmarkApi All = new("all");

    public static readonly ConditionCompSniperMarketplaceAndShippingPoshmarkApi Nwt = new("nwt");

    public TResult Match<TResult>(Func<TResult> onAll, Func<TResult> onNwt, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Nwt => onNwt(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onNwt, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Nwt) onNwt();
        else otherwise(Value);
    }
}
