using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceResourceApi>))]
public sealed record XAmzTargetAmazonForecastServiceResourceApi : OpenStringEnum<XAmzTargetAmazonForecastServiceResourceApi>
{
    private XAmzTargetAmazonForecastServiceResourceApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceResourceApi AmazonForecastStopResource = new(
        "AmazonForecast.StopResource");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastStopResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastStopResource => onAmazonForecastStopResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastStopResource, Action<string> otherwise)
    {
        if (this == AmazonForecastStopResource) onAmazonForecastStopResource();
        else otherwise(Value);
    }
}
