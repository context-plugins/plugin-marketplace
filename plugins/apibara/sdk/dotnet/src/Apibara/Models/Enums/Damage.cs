using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Damage>))]
public sealed record Damage : OpenStringEnum<Damage>
{
    private Damage(string value) : base(value)
    {
    }

    public static readonly Damage Fire = new("Fire");

    public static readonly Damage Hail = new("Hail");

    public static readonly Damage Theft = new("Theft");

    public static readonly Damage Water = new("Water");

    public static readonly Damage Chemical = new("Chemical");

    public static readonly Damage Rollover = new("Rollover");

    public static readonly Damage Mechanical = new("Mechanical");

    public static readonly Damage Vandalized = new("Vandalized");

    public static readonly Damage Repossession = new("Repossession");

    public TResult Match<TResult>(Func<TResult> onFire,
        Func<TResult> onHail,
        Func<TResult> onTheft,
        Func<TResult> onWater,
        Func<TResult> onChemical,
        Func<TResult> onRollover,
        Func<TResult> onMechanical,
        Func<TResult> onVandalized,
        Func<TResult> onRepossession,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Fire => onFire(),
            _ when this == Hail => onHail(),
            _ when this == Theft => onTheft(),
            _ when this == Water => onWater(),
            _ when this == Chemical => onChemical(),
            _ when this == Rollover => onRollover(),
            _ when this == Mechanical => onMechanical(),
            _ when this == Vandalized => onVandalized(),
            _ when this == Repossession => onRepossession(),
            _ => otherwise(Value)
        };

    public void Match(Action onFire,
        Action onHail,
        Action onTheft,
        Action onWater,
        Action onChemical,
        Action onRollover,
        Action onMechanical,
        Action onVandalized,
        Action onRepossession,
        Action<string> otherwise)
    {
        if (this == Fire) onFire();
        else if (this == Hail) onHail();
        else if (this == Theft) onTheft();
        else if (this == Water) onWater();
        else if (this == Chemical) onChemical();
        else if (this == Rollover) onRollover();
        else if (this == Mechanical) onMechanical();
        else if (this == Vandalized) onVandalized();
        else if (this == Repossession) onRepossession();
        else otherwise(Value);
    }
}
