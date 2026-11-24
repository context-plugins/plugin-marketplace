using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges. Used to overide the default AutoML strategy, which is to optimize predictor accuracy. To apply an AutoML strategy that minimizes training time, use LatencyOptimized. This parameter is only valid for predictors trained using AutoML.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AutoMlOverrideStrategyAmazonForecastServicePredictorsApi>))]
public sealed record AutoMlOverrideStrategyAmazonForecastServicePredictorsApi : OpenStringEnum<AutoMlOverrideStrategyAmazonForecastServicePredictorsApi>
{
    private AutoMlOverrideStrategyAmazonForecastServicePredictorsApi(string value) : base(value)
    {
    }

    public static readonly AutoMlOverrideStrategyAmazonForecastServicePredictorsApi LatencyOptimized = new(
        "LatencyOptimized");

    public static readonly AutoMlOverrideStrategyAmazonForecastServicePredictorsApi AccuracyOptimized = new(
        "AccuracyOptimized");

    public TResult Match<TResult>(Func<TResult> onLatencyOptimized,
        Func<TResult> onAccuracyOptimized,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LatencyOptimized => onLatencyOptimized(),
            _ when this == AccuracyOptimized => onAccuracyOptimized(),
            _ => otherwise(Value)
        };

    public void Match(Action onLatencyOptimized, Action onAccuracyOptimized, Action<string> otherwise)
    {
        if (this == LatencyOptimized) onLatencyOptimized();
        else if (this == AccuracyOptimized) onAccuracyOptimized();
        else otherwise(Value);
    }
}
