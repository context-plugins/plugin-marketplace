using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceResourceApi>))]
public sealed record XAmzTarget1AmazonForecastServiceResourceApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceResourceApi>
{
    private XAmzTarget1AmazonForecastServiceResourceApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceResourceApi AmazonForecastTagResource = new(
        "AmazonForecast.TagResource");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastTagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastTagResource => onAmazonForecastTagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastTagResource, Action<string> otherwise)
    {
        if (this == AmazonForecastTagResource) onAmazonForecastTagResource();
        else otherwise(Value);
    }
}
