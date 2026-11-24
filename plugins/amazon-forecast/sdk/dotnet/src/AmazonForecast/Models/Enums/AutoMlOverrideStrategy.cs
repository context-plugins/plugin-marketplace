using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges. The AutoML strategy used to train the predictor. Unless LatencyOptimized is specified, the AutoML strategy optimizes predictor accuracy. This parameter is only valid for predictors trained using AutoML.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AutoMlOverrideStrategy>))]
public sealed record AutoMlOverrideStrategy : OpenStringEnum<AutoMlOverrideStrategy>
{
    private AutoMlOverrideStrategy(string value) : base(value)
    {
    }

    public static readonly AutoMlOverrideStrategy LatencyOptimized = new("LatencyOptimized");

    public static readonly AutoMlOverrideStrategy AccuracyOptimized = new("AccuracyOptimized");

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
