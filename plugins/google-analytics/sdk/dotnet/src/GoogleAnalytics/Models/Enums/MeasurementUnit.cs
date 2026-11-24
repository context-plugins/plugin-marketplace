using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Required. The type for the custom metric's value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MeasurementUnit>))]
public sealed record MeasurementUnit : OpenStringEnum<MeasurementUnit>
{
    private MeasurementUnit(string value) : base(value)
    {
    }

    public static readonly MeasurementUnit MeasurementUnitUnspecified = new("MEASUREMENT_UNIT_UNSPECIFIED");

    public static readonly MeasurementUnit Standard = new("STANDARD");

    public static readonly MeasurementUnit Currency = new("CURRENCY");

    public static readonly MeasurementUnit Feet = new("FEET");

    public static readonly MeasurementUnit Meters = new("METERS");

    public static readonly MeasurementUnit Kilometers = new("KILOMETERS");

    public static readonly MeasurementUnit Miles = new("MILES");

    public static readonly MeasurementUnit Milliseconds = new("MILLISECONDS");

    public static readonly MeasurementUnit Seconds = new("SECONDS");

    public static readonly MeasurementUnit Minutes = new("MINUTES");

    public static readonly MeasurementUnit Hours = new("HOURS");

    public TResult Match<TResult>(Func<TResult> onMeasurementUnitUnspecified,
        Func<TResult> onStandard,
        Func<TResult> onCurrency,
        Func<TResult> onFeet,
        Func<TResult> onMeters,
        Func<TResult> onKilometers,
        Func<TResult> onMiles,
        Func<TResult> onMilliseconds,
        Func<TResult> onSeconds,
        Func<TResult> onMinutes,
        Func<TResult> onHours,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MeasurementUnitUnspecified => onMeasurementUnitUnspecified(),
            _ when this == Standard => onStandard(),
            _ when this == Currency => onCurrency(),
            _ when this == Feet => onFeet(),
            _ when this == Meters => onMeters(),
            _ when this == Kilometers => onKilometers(),
            _ when this == Miles => onMiles(),
            _ when this == Milliseconds => onMilliseconds(),
            _ when this == Seconds => onSeconds(),
            _ when this == Minutes => onMinutes(),
            _ when this == Hours => onHours(),
            _ => otherwise(Value)
        };

    public void Match(Action onMeasurementUnitUnspecified,
        Action onStandard,
        Action onCurrency,
        Action onFeet,
        Action onMeters,
        Action onKilometers,
        Action onMiles,
        Action onMilliseconds,
        Action onSeconds,
        Action onMinutes,
        Action onHours,
        Action<string> otherwise)
    {
        if (this == MeasurementUnitUnspecified) onMeasurementUnitUnspecified();
        else if (this == Standard) onStandard();
        else if (this == Currency) onCurrency();
        else if (this == Feet) onFeet();
        else if (this == Meters) onMeters();
        else if (this == Kilometers) onKilometers();
        else if (this == Miles) onMiles();
        else if (this == Milliseconds) onMilliseconds();
        else if (this == Seconds) onSeconds();
        else if (this == Minutes) onMinutes();
        else if (this == Hours) onHours();
        else otherwise(Value);
    }
}
