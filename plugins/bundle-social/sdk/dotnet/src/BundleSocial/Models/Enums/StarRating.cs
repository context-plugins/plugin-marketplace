using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StarRating>))]
public sealed record StarRating : OpenStringEnum<StarRating>
{
    private StarRating(string value) : base(value)
    {
    }

    public static readonly StarRating One = new("ONE");

    public static readonly StarRating Two = new("TWO");

    public static readonly StarRating Three = new("THREE");

    public static readonly StarRating Four = new("FOUR");

    public static readonly StarRating Five = new("FIVE");

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
