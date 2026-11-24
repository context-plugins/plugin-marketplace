using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// Font family used for the frame label text. <c>sans</c> = Arial / Helvetica (default). <c>sans-condensed</c> = Arial Narrow. <c>serif</c> = Georgia / Times New Roman. <c>serif-elegant</c> = Palatino Linotype / Book Antiqua. <c>mono</c> = Courier New. Values resolve to safe system font stacks on the rendered SVG.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Family1>))]
public sealed record Family1 : OpenStringEnum<Family1>
{
    private Family1(string value) : base(value)
    {
    }

    public static readonly Family1 Sans = new("sans");

    public static readonly Family1 SansCondensed = new("sans-condensed");

    public static readonly Family1 Serif = new("serif");

    public static readonly Family1 SerifElegant = new("serif-elegant");

    public static readonly Family1 Mono = new("mono");

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
