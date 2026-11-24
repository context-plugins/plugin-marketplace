using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// The type of a location, which corresponds to the address lines field of google.type.PostalAddress. For example, "Downtown, Atlanta, GA, USA" has a type of LocationType.NEIGHBORHOOD, and "Kansas City, KS, USA" has a type of LocationType.LOCALITY.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LocationType>))]
public sealed record LocationType : OpenStringEnum<LocationType>
{
    private LocationType(string value) : base(value)
    {
    }

    public static readonly LocationType LocationTypeUnspecified = new("LOCATION_TYPE_UNSPECIFIED");

    public static readonly LocationType Country = new("COUNTRY");

    public static readonly LocationType AdministrativeArea = new("ADMINISTRATIVE_AREA");

    public static readonly LocationType SubAdministrativeArea = new("SUB_ADMINISTRATIVE_AREA");

    public static readonly LocationType Locality = new("LOCALITY");

    public static readonly LocationType PostalCode = new("POSTAL_CODE");

    public static readonly LocationType SubLocality = new("SUB_LOCALITY");

    public static readonly LocationType SubLocality1 = new("SUB_LOCALITY_1");

    public static readonly LocationType SubLocality2 = new("SUB_LOCALITY_2");

    public static readonly LocationType Neighborhood = new("NEIGHBORHOOD");

    public static readonly LocationType StreetAddress = new("STREET_ADDRESS");

    public TResult Match<TResult>(Func<TResult> onLocationTypeUnspecified,
        Func<TResult> onCountry,
        Func<TResult> onAdministrativeArea,
        Func<TResult> onSubAdministrativeArea,
        Func<TResult> onLocality,
        Func<TResult> onPostalCode,
        Func<TResult> onSubLocality,
        Func<TResult> onSubLocality1,
        Func<TResult> onSubLocality2,
        Func<TResult> onNeighborhood,
        Func<TResult> onStreetAddress,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LocationTypeUnspecified => onLocationTypeUnspecified(),
            _ when this == Country => onCountry(),
            _ when this == AdministrativeArea => onAdministrativeArea(),
            _ when this == SubAdministrativeArea => onSubAdministrativeArea(),
            _ when this == Locality => onLocality(),
            _ when this == PostalCode => onPostalCode(),
            _ when this == SubLocality => onSubLocality(),
            _ when this == SubLocality1 => onSubLocality1(),
            _ when this == SubLocality2 => onSubLocality2(),
            _ when this == Neighborhood => onNeighborhood(),
            _ when this == StreetAddress => onStreetAddress(),
            _ => otherwise(Value)
        };

    public void Match(Action onLocationTypeUnspecified,
        Action onCountry,
        Action onAdministrativeArea,
        Action onSubAdministrativeArea,
        Action onLocality,
        Action onPostalCode,
        Action onSubLocality,
        Action onSubLocality1,
        Action onSubLocality2,
        Action onNeighborhood,
        Action onStreetAddress,
        Action<string> otherwise)
    {
        if (this == LocationTypeUnspecified) onLocationTypeUnspecified();
        else if (this == Country) onCountry();
        else if (this == AdministrativeArea) onAdministrativeArea();
        else if (this == SubAdministrativeArea) onSubAdministrativeArea();
        else if (this == Locality) onLocality();
        else if (this == PostalCode) onPostalCode();
        else if (this == SubLocality) onSubLocality();
        else if (this == SubLocality1) onSubLocality1();
        else if (this == SubLocality2) onSubLocality2();
        else if (this == Neighborhood) onNeighborhood();
        else if (this == StreetAddress) onStreetAddress();
        else otherwise(Value);
    }
}
