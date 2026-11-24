using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceWhatIfForecastApi>))]
public sealed record XAmzTargetAmazonForecastServiceWhatIfForecastApi : OpenStringEnum<XAmzTargetAmazonForecastServiceWhatIfForecastApi>
{
    private XAmzTargetAmazonForecastServiceWhatIfForecastApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceWhatIfForecastApi AmazonForecastCreateWhatIfForecast = new(
        "AmazonForecast.CreateWhatIfForecast");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateWhatIfForecast,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateWhatIfForecast => onAmazonForecastCreateWhatIfForecast(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateWhatIfForecast, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateWhatIfForecast) onAmazonForecastCreateWhatIfForecast();
        else otherwise(Value);
    }
}
