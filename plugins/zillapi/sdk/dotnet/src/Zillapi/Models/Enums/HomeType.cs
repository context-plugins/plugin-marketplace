using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<HomeType>))]
public sealed record HomeType : OpenStringEnum<HomeType>
{
    private HomeType(string value) : base(value)
    {
    }

    public static readonly HomeType House = new("house");

    public static readonly HomeType Condo = new("condo");

    public static readonly HomeType Townhouse = new("townhouse");

    public static readonly HomeType MultiFamily = new("multi_family");

    public static readonly HomeType Manufactured = new("manufactured");

    public static readonly HomeType Lot = new("lot");

    public static readonly HomeType Apartment = new("apartment");

    public TResult Match<TResult>(Func<TResult> onHouse,
        Func<TResult> onCondo,
        Func<TResult> onTownhouse,
        Func<TResult> onMultiFamily,
        Func<TResult> onManufactured,
        Func<TResult> onLot,
        Func<TResult> onApartment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == House => onHouse(),
            _ when this == Condo => onCondo(),
            _ when this == Townhouse => onTownhouse(),
            _ when this == MultiFamily => onMultiFamily(),
            _ when this == Manufactured => onManufactured(),
            _ when this == Lot => onLot(),
            _ when this == Apartment => onApartment(),
            _ => otherwise(Value)
        };

    public void Match(Action onHouse,
        Action onCondo,
        Action onTownhouse,
        Action onMultiFamily,
        Action onManufactured,
        Action onLot,
        Action onApartment,
        Action<string> otherwise)
    {
        if (this == House) onHouse();
        else if (this == Condo) onCondo();
        else if (this == Townhouse) onTownhouse();
        else if (this == MultiFamily) onMultiFamily();
        else if (this == Manufactured) onManufactured();
        else if (this == Lot) onLot();
        else if (this == Apartment) onApartment();
        else otherwise(Value);
    }
}
