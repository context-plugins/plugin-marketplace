using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceResourceApi>))]
public sealed record XAmzTarget2AmazonForecastServiceResourceApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceResourceApi>
{
    private XAmzTarget2AmazonForecastServiceResourceApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceResourceApi AmazonForecastUntagResource = new(
        "AmazonForecast.UntagResource");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastUntagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastUntagResource => onAmazonForecastUntagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastUntagResource, Action<string> otherwise)
    {
        if (this == AmazonForecastUntagResource) onAmazonForecastUntagResource();
        else otherwise(Value);
    }
}
