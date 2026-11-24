using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// The severity level. A severity level of 'ONE' is the most severe, and a level of 'FIVE' is the least severe.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Level>))]
public sealed record Level : OpenStringEnum<Level>
{
    private Level(string value) : base(value)
    {
    }

    public static readonly Level One = new("ONE");

    public static readonly Level Two = new("TWO");

    public static readonly Level Three = new("THREE");

    public static readonly Level Four = new("FOUR");

    public static readonly Level Five = new("FIVE");

    public TResult Match<TResult>(Func<TResult> onOne,
        Func<TResult> onTwo,
        Func<TResult> onThree,
        Func<TResult> onFour,
        Func<TResult> onFive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == One => onOne(),
            _ when this == Two => onTwo(),
            _ when this == Three => onThree(),
            _ when this == Four => onFour(),
            _ when this == Five => onFive(),
            _ => otherwise(Value)
        };

    public void Match(Action onOne,
        Action onTwo,
        Action onThree,
        Action onFour,
        Action onFive,
        Action<string> otherwise)
    {
        if (this == One) onOne();
        else if (this == Two) onTwo();
        else if (this == Three) onThree();
        else if (this == Four) onFour();
        else if (this == Five) onFive();
        else otherwise(Value);
    }
}
