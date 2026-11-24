using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceWhatIfForecastApi>))]
public sealed record XAmzTarget1AmazonForecastServiceWhatIfForecastApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceWhatIfForecastApi>
{
    private XAmzTarget1AmazonForecastServiceWhatIfForecastApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceWhatIfForecastApi AmazonForecastDeleteWhatIfForecast = new(
        "AmazonForecast.DeleteWhatIfForecast");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteWhatIfForecast,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteWhatIfForecast => onAmazonForecastDeleteWhatIfForecast(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteWhatIfForecast, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteWhatIfForecast) onAmazonForecastDeleteWhatIfForecast();
        else otherwise(Value);
    }
}
