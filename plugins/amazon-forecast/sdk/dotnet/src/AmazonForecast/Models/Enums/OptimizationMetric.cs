using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The accuracy metric used to optimize the predictor.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OptimizationMetric>))]
public sealed record OptimizationMetric : OpenStringEnum<OptimizationMetric>
{
    private OptimizationMetric(string value) : base(value)
    {
    }

    public static readonly OptimizationMetric Wape = new("WAPE");

    public static readonly OptimizationMetric Rmse = new("RMSE");

    public static readonly OptimizationMetric AverageWeightedQuantileLoss = new("AverageWeightedQuantileLoss");

    public static readonly OptimizationMetric Mase = new("MASE");

    public static readonly OptimizationMetric Mape = new("MAPE");

    public TResult Match<TResult>(Func<TResult> onWape,
        Func<TResult> onRmse,
        Func<TResult> onAverageWeightedQuantileLoss,
        Func<TResult> onMase,
        Func<TResult> onMape,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Wape => onWape(),
            _ when this == Rmse => onRmse(),
            _ when this == AverageWeightedQuantileLoss => onAverageWeightedQuantileLoss(),
            _ when this == Mase => onMase(),
            _ when this == Mape => onMape(),
            _ => otherwise(Value)
        };

    public void Match(Action onWape,
        Action onRmse,
        Action onAverageWeightedQuantileLoss,
        Action onMase,
        Action onMape,
        Action<string> otherwise)
    {
        if (this == Wape) onWape();
        else if (this == Rmse) onRmse();
        else if (this == AverageWeightedQuantileLoss) onAverageWeightedQuantileLoss();
        else if (this == Mase) onMase();
        else if (this == Mape) onMape();
        else otherwise(Value);
    }
}
