using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusZillapiZillowPropertyDataPropertiesApi>))]
public sealed record StatusZillapiZillowPropertyDataPropertiesApi : OpenStringEnum<StatusZillapiZillowPropertyDataPropertiesApi>
{
    private StatusZillapiZillowPropertyDataPropertiesApi(string value) : base(value)
    {
    }

    public static readonly StatusZillapiZillowPropertyDataPropertiesApi ForSale = new("FOR_SALE");

    public static readonly StatusZillapiZillowPropertyDataPropertiesApi RecentlySold = new("RECENTLY_SOLD");

    public static readonly StatusZillapiZillowPropertyDataPropertiesApi ForRent = new("FOR_RENT");

    public TResult Match<TResult>(Func<TResult> onForSale,
        Func<TResult> onRecentlySold,
        Func<TResult> onForRent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ForSale => onForSale(),
            _ when this == RecentlySold => onRecentlySold(),
            _ when this == ForRent => onForRent(),
            _ => otherwise(Value)
        };

    public void Match(Action onForSale, Action onRecentlySold, Action onForRent, Action<string> otherwise)
    {
        if (this == ForSale) onForSale();
        else if (this == RecentlySold) onRecentlySold();
        else if (this == ForRent) onForRent();
        else otherwise(Value);
    }
}
