using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceForecastsApi>))]
public sealed record XAmzTargetAmazonForecastServiceForecastsApi : OpenStringEnum<XAmzTargetAmazonForecastServiceForecastsApi>
{
    private XAmzTargetAmazonForecastServiceForecastsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceForecastsApi AmazonForecastCreateForecast = new(
        "AmazonForecast.CreateForecast");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateForecast, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateForecast => onAmazonForecastCreateForecast(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateForecast, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateForecast) onAmazonForecastCreateForecast();
        else otherwise(Value);
    }
}
