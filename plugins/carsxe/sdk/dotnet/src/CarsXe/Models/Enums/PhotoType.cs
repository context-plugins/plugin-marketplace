using System;
using System.Text.Json.Serialization;
using CarsXe.Core.Enum;

namespace CarsXe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PhotoType>))]
public sealed record PhotoType : OpenStringEnum<PhotoType>
{
    private PhotoType(string value) : base(value)
    {
    }

    public static readonly PhotoType Interior = new("interior");

    public static readonly PhotoType Exterior = new("exterior");

    public static readonly PhotoType Engine = new("engine");

    public TResult Match<TResult>(Func<TResult> onInterior,
        Func<TResult> onExterior,
        Func<TResult> onEngine,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Interior => onInterior(),
            _ when this == Exterior => onExterior(),
            _ when this == Engine => onEngine(),
            _ => otherwise(Value)
        };

    public void Match(Action onInterior, Action onExterior, Action onEngine, Action<string> otherwise)
    {
        if (this == Interior) onInterior();
        else if (this == Exterior) onExterior();
        else if (this == Engine) onEngine();
        else otherwise(Value);
    }
}
