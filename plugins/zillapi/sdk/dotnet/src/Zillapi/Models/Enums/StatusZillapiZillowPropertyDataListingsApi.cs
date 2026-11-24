using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

/// <summary>
/// Listing status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusZillapiZillowPropertyDataListingsApi>))]
public sealed record StatusZillapiZillowPropertyDataListingsApi : OpenStringEnum<StatusZillapiZillowPropertyDataListingsApi>
{
    private StatusZillapiZillowPropertyDataListingsApi(string value) : base(value)
    {
    }

    public static readonly StatusZillapiZillowPropertyDataListingsApi ForSale = new("for_sale");

    public static readonly StatusZillapiZillowPropertyDataListingsApi ForRent = new("for_rent");

    public static readonly StatusZillapiZillowPropertyDataListingsApi Sold = new("sold");

    public TResult Match<TResult>(Func<TResult> onForSale,
        Func<TResult> onForRent,
        Func<TResult> onSold,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ForSale => onForSale(),
            _ when this == ForRent => onForRent(),
            _ when this == Sold => onSold(),
            _ => otherwise(Value)
        };

    public void Match(Action onForSale, Action onForRent, Action onSold, Action<string> otherwise)
    {
        if (this == ForSale) onForSale();
        else if (this == ForRent) onForRent();
        else if (this == Sold) onSold();
        else otherwise(Value);
    }
}
