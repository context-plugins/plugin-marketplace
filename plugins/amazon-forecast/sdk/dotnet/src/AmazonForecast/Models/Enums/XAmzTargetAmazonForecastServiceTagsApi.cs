using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceTagsApi>))]
public sealed record XAmzTargetAmazonForecastServiceTagsApi : OpenStringEnum<XAmzTargetAmazonForecastServiceTagsApi>
{
    private XAmzTargetAmazonForecastServiceTagsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceTagsApi AmazonForecastListTagsForResource = new(
        "AmazonForecast.ListTagsForResource");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListTagsForResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListTagsForResource => onAmazonForecastListTagsForResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListTagsForResource, Action<string> otherwise)
    {
        if (this == AmazonForecastListTagsForResource) onAmazonForecastListTagsForResource();
        else otherwise(Value);
    }
}
