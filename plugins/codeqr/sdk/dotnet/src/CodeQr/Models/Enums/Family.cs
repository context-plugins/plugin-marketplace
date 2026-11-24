using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Family>))]
public sealed record Family : OpenStringEnum<Family>
{
    private Family(string value) : base(value)
    {
    }

    public static readonly Family Sans = new("sans");

    public static readonly Family SansCondensed = new("sans-condensed");

    public static readonly Family Serif = new("serif");

    public static readonly Family SerifElegant = new("serif-elegant");

    public static readonly Family Mono = new("mono");

    public TResult Match<TResult>(Func<TResult> onSans,
        Func<TResult> onSansCondensed,
        Func<TResult> onSerif,
        Func<TResult> onSerifElegant,
        Func<TResult> onMono,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sans => onSans(),
            _ when this == SansCondensed => onSansCondensed(),
            _ when this == Serif => onSerif(),
            _ when this == SerifElegant => onSerifElegant(),
            _ when this == Mono => onMono(),
            _ => otherwise(Value)
        };

    public void Match(Action onSans,
        Action onSansCondensed,
        Action onSerif,
        Action onSerifElegant,
        Action onMono,
        Action<string> otherwise)
    {
        if (this == Sans) onSans();
        else if (this == SansCondensed) onSansCondensed();
        else if (this == Serif) onSerif();
        else if (this == SerifElegant) onSerifElegant();
        else if (this == Mono) onMono();
        else otherwise(Value);
    }
}
