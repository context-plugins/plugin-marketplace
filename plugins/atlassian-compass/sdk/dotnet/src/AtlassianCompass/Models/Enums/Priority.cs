using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// Priority of the alert.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Priority>))]
public sealed record Priority : OpenStringEnum<Priority>
{
    private Priority(string value) : base(value)
    {
    }

    public static readonly Priority P1 = new("P1");

    public static readonly Priority P2 = new("P2");

    public static readonly Priority P3 = new("P3");

    public static readonly Priority P4 = new("P4");

    public static readonly Priority P5 = new("P5");

    public TResult Match<TResult>(Func<TResult> onP1,
        Func<TResult> onP2,
        Func<TResult> onP3,
        Func<TResult> onP4,
        Func<TResult> onP5,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == P1 => onP1(),
            _ when this == P2 => onP2(),
            _ when this == P3 => onP3(),
            _ when this == P4 => onP4(),
            _ when this == P5 => onP5(),
            _ => otherwise(Value)
        };

    public void Match(Action onP1, Action onP2, Action onP3, Action onP4, Action onP5, Action<string> otherwise)
    {
        if (this == P1) onP1();
        else if (this == P2) onP2();
        else if (this == P3) onP3();
        else if (this == P4) onP4();
        else if (this == P5) onP5();
        else otherwise(Value);
    }
}
