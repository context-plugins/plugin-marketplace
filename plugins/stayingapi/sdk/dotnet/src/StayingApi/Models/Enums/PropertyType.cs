using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PropertyType>))]
public sealed record PropertyType : OpenStringEnum<PropertyType>
{
    private PropertyType(string value) : base(value)
    {
    }

    public static readonly PropertyType Hotel = new("hotel");

    public static readonly PropertyType Apartment = new("apartment");

    public static readonly PropertyType House = new("house");

    public static readonly PropertyType Villa = new("villa");

    public static readonly PropertyType Cottage = new("cottage");

    public static readonly PropertyType Other = new("other");

    public TResult Match<TResult>(Func<TResult> onHotel,
        Func<TResult> onApartment,
        Func<TResult> onHouse,
        Func<TResult> onVilla,
        Func<TResult> onCottage,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Hotel => onHotel(),
            _ when this == Apartment => onApartment(),
            _ when this == House => onHouse(),
            _ when this == Villa => onVilla(),
            _ when this == Cottage => onCottage(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onHotel,
        Action onApartment,
        Action onHouse,
        Action onVilla,
        Action onCottage,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == Hotel) onHotel();
        else if (this == Apartment) onApartment();
        else if (this == House) onHouse();
        else if (this == Villa) onVilla();
        else if (this == Cottage) onCottage();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
