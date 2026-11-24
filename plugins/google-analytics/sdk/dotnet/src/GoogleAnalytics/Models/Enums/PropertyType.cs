using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PropertyType>))]
public sealed record PropertyType : OpenStringEnum<PropertyType>
{
    private PropertyType(string value) : base(value)
    {
    }

    public static readonly PropertyType PropertyTypeUnspecified = new("PROPERTY_TYPE_UNSPECIFIED");

    public static readonly PropertyType PropertyTypeOrdinary = new("PROPERTY_TYPE_ORDINARY");

    public static readonly PropertyType PropertyTypeSubproperty = new("PROPERTY_TYPE_SUBPROPERTY");

    public static readonly PropertyType PropertyTypeRollup = new("PROPERTY_TYPE_ROLLUP");

    public TResult Match<TResult>(Func<TResult> onPropertyTypeUnspecified,
        Func<TResult> onPropertyTypeOrdinary,
        Func<TResult> onPropertyTypeSubproperty,
        Func<TResult> onPropertyTypeRollup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PropertyTypeUnspecified => onPropertyTypeUnspecified(),
            _ when this == PropertyTypeOrdinary => onPropertyTypeOrdinary(),
            _ when this == PropertyTypeSubproperty => onPropertyTypeSubproperty(),
            _ when this == PropertyTypeRollup => onPropertyTypeRollup(),
            _ => otherwise(Value)
        };

    public void Match(Action onPropertyTypeUnspecified,
        Action onPropertyTypeOrdinary,
        Action onPropertyTypeSubproperty,
        Action onPropertyTypeRollup,
        Action<string> otherwise)
    {
        if (this == PropertyTypeUnspecified) onPropertyTypeUnspecified();
        else if (this == PropertyTypeOrdinary) onPropertyTypeOrdinary();
        else if (this == PropertyTypeSubproperty) onPropertyTypeSubproperty();
        else if (this == PropertyTypeRollup) onPropertyTypeRollup();
        else otherwise(Value);
    }
}
