using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AmazonForecastServiceOperationsApi>))]
public sealed record XAmzTarget4AmazonForecastServiceOperationsApi : OpenStringEnum<XAmzTarget4AmazonForecastServiceOperationsApi>
{
    private XAmzTarget4AmazonForecastServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AmazonForecastServiceOperationsApi AmazonForecastGetAccuracyMetrics = new(
        "AmazonForecast.GetAccuracyMetrics");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastGetAccuracyMetrics, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastGetAccuracyMetrics => onAmazonForecastGetAccuracyMetrics(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastGetAccuracyMetrics, Action<string> otherwise)
    {
        if (this == AmazonForecastGetAccuracyMetrics) onAmazonForecastGetAccuracyMetrics();
        else otherwise(Value);
    }
}
