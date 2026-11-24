using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MlFeature>))]
public sealed record MlFeature : OpenStringEnum<MlFeature>
{
    private MlFeature(string value) : base(value)
    {
    }

    public static readonly MlFeature Increasing = new("increasing");

    public static readonly MlFeature Decreasing = new("decreasing");

    public static readonly MlFeature None = new("none");

    public static readonly MlFeature Forecast = new("forecast");

    public TResult Match<TResult>(Func<TResult> onIncreasing,
        Func<TResult> onDecreasing,
        Func<TResult> onNone,
        Func<TResult> onForecast,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Increasing => onIncreasing(),
            _ when this == Decreasing => onDecreasing(),
            _ when this == None => onNone(),
            _ when this == Forecast => onForecast(),
            _ => otherwise(Value)
        };

    public void Match(Action onIncreasing,
        Action onDecreasing,
        Action onNone,
        Action onForecast,
        Action<string> otherwise)
    {
        if (this == Increasing) onIncreasing();
        else if (this == Decreasing) onDecreasing();
        else if (this == None) onNone();
        else if (this == Forecast) onForecast();
        else otherwise(Value);
    }
}
