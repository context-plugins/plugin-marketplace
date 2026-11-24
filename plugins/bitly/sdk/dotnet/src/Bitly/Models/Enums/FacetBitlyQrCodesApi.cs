using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FacetBitlyQrCodesApi>))]
public sealed record FacetBitlyQrCodesApi : OpenStringEnum<FacetBitlyQrCodesApi>
{
    private FacetBitlyQrCodesApi(string value) : base(value)
    {
    }

    public static readonly FacetBitlyQrCodesApi Countries = new("countries");

    public static readonly FacetBitlyQrCodesApi Cities = new("cities");

    public static readonly FacetBitlyQrCodesApi DeviceOs = new("device_os");

    public static readonly FacetBitlyQrCodesApi Browsers = new("browsers");

    public static readonly FacetBitlyQrCodesApi Destinations = new("destinations");

    public TResult Match<TResult>(Func<TResult> onCountries,
        Func<TResult> onCities,
        Func<TResult> onDeviceOs,
        Func<TResult> onBrowsers,
        Func<TResult> onDestinations,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Countries => onCountries(),
            _ when this == Cities => onCities(),
            _ when this == DeviceOs => onDeviceOs(),
            _ when this == Browsers => onBrowsers(),
            _ when this == Destinations => onDestinations(),
            _ => otherwise(Value)
        };

    public void Match(Action onCountries,
        Action onCities,
        Action onDeviceOs,
        Action onBrowsers,
        Action onDestinations,
        Action<string> otherwise)
    {
        if (this == Countries) onCountries();
        else if (this == Cities) onCities();
        else if (this == DeviceOs) onDeviceOs();
        else if (this == Browsers) onBrowsers();
        else if (this == Destinations) onDestinations();
        else otherwise(Value);
    }
}
