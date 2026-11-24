using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The data type of the field. For a related time series dataset, other than date, item_id, and forecast dimensions attributes, all attributes should be of numerical type (integer/float).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AttributeType>))]
public sealed record AttributeType : OpenStringEnum<AttributeType>
{
    private AttributeType(string value) : base(value)
    {
    }

    public static readonly AttributeType String = new("string");

    public static readonly AttributeType Integer = new("integer");

    public static readonly AttributeType Float = new("float");

    public static readonly AttributeType Timestamp = new("timestamp");

    public static readonly AttributeType Geolocation = new("geolocation");

    public TResult Match<TResult>(Func<TResult> onString,
        Func<TResult> onInteger,
        Func<TResult> onFloat,
        Func<TResult> onTimestamp,
        Func<TResult> onGeolocation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == String => onString(),
            _ when this == Integer => onInteger(),
            _ when this == Float => onFloat(),
            _ when this == Timestamp => onTimestamp(),
            _ when this == Geolocation => onGeolocation(),
            _ => otherwise(Value)
        };

    public void Match(Action onString,
        Action onInteger,
        Action onFloat,
        Action onTimestamp,
        Action onGeolocation,
        Action<string> otherwise)
    {
        if (this == String) onString();
        else if (this == Integer) onInteger();
        else if (this == Float) onFloat();
        else if (this == Timestamp) onTimestamp();
        else if (this == Geolocation) onGeolocation();
        else otherwise(Value);
    }
}
