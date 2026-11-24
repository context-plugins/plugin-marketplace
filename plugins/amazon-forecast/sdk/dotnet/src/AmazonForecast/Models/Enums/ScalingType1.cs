using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values: Auto Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter. Linear Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale. Logarithmic Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale. Logarithmic scaling works only for ranges that have values greater than 0. ReverseLogarithmic Not supported for IntegerParameterRange. Reverse logarithmic scaling works only for ranges that are entirely w
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ScalingType1>))]
public sealed record ScalingType1 : OpenStringEnum<ScalingType1>
{
    private ScalingType1(string value) : base(value)
    {
    }

    public static readonly ScalingType1 Auto = new("Auto");

    public static readonly ScalingType1 Linear = new("Linear");

    public static readonly ScalingType1 Logarithmic = new("Logarithmic");

    public static readonly ScalingType1 ReverseLogarithmic = new("ReverseLogarithmic");

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
