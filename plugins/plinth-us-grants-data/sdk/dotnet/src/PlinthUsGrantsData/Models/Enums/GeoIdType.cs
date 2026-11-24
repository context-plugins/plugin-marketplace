using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<GeoIdType>))]
public sealed record GeoIdType : OpenStringEnum<GeoIdType>
{
    private GeoIdType(string value) : base(value)
    {
    }

    public static readonly GeoIdType State = new("state");

    public static readonly GeoIdType Zip = new("zip");

    public static readonly GeoIdType City = new("city");

    public static readonly GeoIdType CountyFips = new("county_fips");

    public static readonly GeoIdType Country = new("country");

    public TResult Match<TResult>(Func<TResult> onState,
        Func<TResult> onZip,
        Func<TResult> onCity,
        Func<TResult> onCountyFips,
        Func<TResult> onCountry,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == State => onState(),
            _ when this == Zip => onZip(),
            _ when this == City => onCity(),
            _ when this == CountyFips => onCountyFips(),
            _ when this == Country => onCountry(),
            _ => otherwise(Value)
        };

    public void Match(Action onState,
        Action onZip,
        Action onCity,
        Action onCountyFips,
        Action onCountry,
        Action<string> otherwise)
    {
        if (this == State) onState();
        else if (this == Zip) onZip();
        else if (this == City) onCity();
        else if (this == CountyFips) onCountyFips();
        else if (this == Country) onCountry();
        else otherwise(Value);
    }
}
