using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceOperationsApi>))]
public sealed record XAmzTargetAmazonForecastServiceOperationsApi : OpenStringEnum<XAmzTargetAmazonForecastServiceOperationsApi>
{
    private XAmzTargetAmazonForecastServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceOperationsApi AmazonForecastResumeResource = new(
        "AmazonForecast.ResumeResource");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastResumeResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastResumeResource => onAmazonForecastResumeResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastResumeResource, Action<string> otherwise)
    {
        if (this == AmazonForecastResumeResource) onAmazonForecastResumeResource();
        else otherwise(Value);
    }
}
