using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5>))]
public sealed record XAmzTarget5 : OpenStringEnum<XAmzTarget5>
{
    private XAmzTarget5(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5 AmazonForecastListMonitorEvaluations = new(
        "AmazonForecast.ListMonitorEvaluations");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListMonitorEvaluations,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListMonitorEvaluations => onAmazonForecastListMonitorEvaluations(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListMonitorEvaluations, Action<string> otherwise)
    {
        if (this == AmazonForecastListMonitorEvaluations) onAmazonForecastListMonitorEvaluations();
        else otherwise(Value);
    }
}
