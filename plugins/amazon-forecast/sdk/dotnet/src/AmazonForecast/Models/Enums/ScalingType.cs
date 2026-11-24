using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values: Auto Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter. Linear Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale. Logarithmic Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale. Logarithmic scaling works only for ranges that have values greater than 0. ReverseLogarithmic hyperparameter tuning searches the values in the hyperparameter range by using a reverse logarithmic scale. Re
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ScalingType>))]
public sealed record ScalingType : OpenStringEnum<ScalingType>
{
    private ScalingType(string value) : base(value)
    {
    }

    public static readonly ScalingType Auto = new("Auto");

    public static readonly ScalingType Linear = new("Linear");

    public static readonly ScalingType Logarithmic = new("Logarithmic");

    public static readonly ScalingType ReverseLogarithmic = new("ReverseLogarithmic");

    public TResult Match<TResult>(Func<TResult> onAuto,
        Func<TResult> onLinear,
        Func<TResult> onLogarithmic,
        Func<TResult> onReverseLogarithmic,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auto => onAuto(),
            _ when this == Linear => onLinear(),
            _ when this == Logarithmic => onLogarithmic(),
            _ when this == ReverseLogarithmic => onReverseLogarithmic(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuto,
        Action onLinear,
        Action onLogarithmic,
        Action onReverseLogarithmic,
        Action<string> otherwise)
    {
        if (this == Auto) onAuto();
        else if (this == Linear) onLinear();
        else if (this == Logarithmic) onLogarithmic();
        else if (this == ReverseLogarithmic) onReverseLogarithmic();
        else otherwise(Value);
    }
}
