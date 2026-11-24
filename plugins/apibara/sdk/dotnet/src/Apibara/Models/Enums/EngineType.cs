using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EngineType>))]
public sealed record EngineType : OpenStringEnum<EngineType>
{
    private EngineType(string value) : base(value)
    {
    }

    public static readonly EngineType I = new("I");

    public static readonly EngineType V = new("V");

    public static readonly EngineType W = new("W");

    public static readonly EngineType B = new("B");

    public static readonly EngineType H = new("H");

    public TResult Match<TResult>(Func<TResult> onI,
        Func<TResult> onV,
        Func<TResult> onW,
        Func<TResult> onB,
        Func<TResult> onH,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == I => onI(),
            _ when this == V => onV(),
            _ when this == W => onW(),
            _ when this == B => onB(),
            _ when this == H => onH(),
            _ => otherwise(Value)
        };

    public void Match(Action onI, Action onV, Action onW, Action onB, Action onH, Action<string> otherwise)
    {
        if (this == I) onI();
        else if (this == V) onV();
        else if (this == W) onW();
        else if (this == B) onB();
        else if (this == H) onH();
        else otherwise(Value);
    }
}
