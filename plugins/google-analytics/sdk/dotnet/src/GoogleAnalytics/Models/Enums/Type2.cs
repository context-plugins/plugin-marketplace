using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// The metric's data type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 MetricTypeUnspecified = new("METRIC_TYPE_UNSPECIFIED");

    public static readonly Type2 TypeInteger = new("TYPE_INTEGER");

    public static readonly Type2 TypeFloat = new("TYPE_FLOAT");

    public static readonly Type2 TypeSeconds = new("TYPE_SECONDS");

    public static readonly Type2 TypeMilliseconds = new("TYPE_MILLISECONDS");

    public static readonly Type2 TypeMinutes = new("TYPE_MINUTES");

    public static readonly Type2 TypeHours = new("TYPE_HOURS");

    public static readonly Type2 TypeStandard = new("TYPE_STANDARD");

    public static readonly Type2 TypeCurrency = new("TYPE_CURRENCY");

    public static readonly Type2 TypeFeet = new("TYPE_FEET");

    public static readonly Type2 TypeMiles = new("TYPE_MILES");

    public static readonly Type2 TypeMeters = new("TYPE_METERS");

    public static readonly Type2 TypeKilometers = new("TYPE_KILOMETERS");

    public TResult Match<TResult>(Func<TResult> onMetricTypeUnspecified,
        Func<TResult> onTypeInteger,
        Func<TResult> onTypeFloat,
        Func<TResult> onTypeSeconds,
        Func<TResult> onTypeMilliseconds,
        Func<TResult> onTypeMinutes,
        Func<TResult> onTypeHours,
        Func<TResult> onTypeStandard,
        Func<TResult> onTypeCurrency,
        Func<TResult> onTypeFeet,
        Func<TResult> onTypeMiles,
        Func<TResult> onTypeMeters,
        Func<TResult> onTypeKilometers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MetricTypeUnspecified => onMetricTypeUnspecified(),
            _ when this == TypeInteger => onTypeInteger(),
            _ when this == TypeFloat => onTypeFloat(),
            _ when this == TypeSeconds => onTypeSeconds(),
            _ when this == TypeMilliseconds => onTypeMilliseconds(),
            _ when this == TypeMinutes => onTypeMinutes(),
            _ when this == TypeHours => onTypeHours(),
            _ when this == TypeStandard => onTypeStandard(),
            _ when this == TypeCurrency => onTypeCurrency(),
            _ when this == TypeFeet => onTypeFeet(),
            _ when this == TypeMiles => onTypeMiles(),
            _ when this == TypeMeters => onTypeMeters(),
            _ when this == TypeKilometers => onTypeKilometers(),
            _ => otherwise(Value)
        };

    public void Match(Action onMetricTypeUnspecified,
        Action onTypeInteger,
        Action onTypeFloat,
        Action onTypeSeconds,
        Action onTypeMilliseconds,
        Action onTypeMinutes,
        Action onTypeHours,
        Action onTypeStandard,
        Action onTypeCurrency,
        Action onTypeFeet,
        Action onTypeMiles,
        Action onTypeMeters,
        Action onTypeKilometers,
        Action<string> otherwise)
    {
        if (this == MetricTypeUnspecified) onMetricTypeUnspecified();
        else if (this == TypeInteger) onTypeInteger();
        else if (this == TypeFloat) onTypeFloat();
        else if (this == TypeSeconds) onTypeSeconds();
        else if (this == TypeMilliseconds) onTypeMilliseconds();
        else if (this == TypeMinutes) onTypeMinutes();
        else if (this == TypeHours) onTypeHours();
        else if (this == TypeStandard) onTypeStandard();
        else if (this == TypeCurrency) onTypeCurrency();
        else if (this == TypeFeet) onTypeFeet();
        else if (this == TypeMiles) onTypeMiles();
        else if (this == TypeMeters) onTypeMeters();
        else if (this == TypeKilometers) onTypeKilometers();
        else otherwise(Value);
    }
}
