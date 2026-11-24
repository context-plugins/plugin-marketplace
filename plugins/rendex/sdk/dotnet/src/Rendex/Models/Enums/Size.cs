using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Size>))]
public sealed record Size : OpenStringEnum<Size>
{
    private Size(string value) : base(value)
    {
    }

    public static readonly Size A4 = new("A4");

    public static readonly Size Letter = new("Letter");

    public static readonly Size Legal = new("Legal");

    public static readonly Size Tabloid = new("Tabloid");

    public static readonly Size A3 = new("A3");

    public TResult Match<TResult>(Func<TResult> onA4,
        Func<TResult> onLetter,
        Func<TResult> onLegal,
        Func<TResult> onTabloid,
        Func<TResult> onA3,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == A4 => onA4(),
            _ when this == Letter => onLetter(),
            _ when this == Legal => onLegal(),
            _ when this == Tabloid => onTabloid(),
            _ when this == A3 => onA3(),
            _ => otherwise(Value)
        };

    public void Match(Action onA4,
        Action onLetter,
        Action onLegal,
        Action onTabloid,
        Action onA3,
        Action<string> otherwise)
    {
        if (this == A4) onA4();
        else if (this == Letter) onLetter();
        else if (this == Legal) onLegal();
        else if (this == Tabloid) onTabloid();
        else if (this == A3) onA3();
        else otherwise(Value);
    }
}
