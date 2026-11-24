using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FuelType>))]
public sealed record FuelType : OpenStringEnum<FuelType>
{
    private FuelType(string value) : base(value)
    {
    }

    public static readonly FuelType Diesel = new("Diesel");

    public static readonly FuelType Hybrid = new("Hybrid");

    public static readonly FuelType Electric = new("Electric");

    public static readonly FuelType Flexible = new("Flexible");

    public static readonly FuelType Gasoline = new("Gasoline");

    public static readonly FuelType AllOthers = new("All others");

    public TResult Match<TResult>(Func<TResult> onDiesel,
        Func<TResult> onHybrid,
        Func<TResult> onElectric,
        Func<TResult> onFlexible,
        Func<TResult> onGasoline,
        Func<TResult> onAllOthers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Diesel => onDiesel(),
            _ when this == Hybrid => onHybrid(),
            _ when this == Electric => onElectric(),
            _ when this == Flexible => onFlexible(),
            _ when this == Gasoline => onGasoline(),
            _ when this == AllOthers => onAllOthers(),
            _ => otherwise(Value)
        };

    public void Match(Action onDiesel,
        Action onHybrid,
        Action onElectric,
        Action onFlexible,
        Action onGasoline,
        Action onAllOthers,
        Action<string> otherwise)
    {
        if (this == Diesel) onDiesel();
        else if (this == Hybrid) onHybrid();
        else if (this == Electric) onElectric();
        else if (this == Flexible) onFlexible();
        else if (this == Gasoline) onGasoline();
        else if (this == AllOthers) onAllOthers();
        else otherwise(Value);
    }
}
