using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

/// <summary>
/// Target audience: "plain" (plain-language style for a general audience, the default), "elementary" (~US grade 3-5), "middle_school" (~grade 6-8) or "high_school" (~grade 9-10).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReadingLevel>))]
public sealed record ReadingLevel : OpenStringEnum<ReadingLevel>
{
    private ReadingLevel(string value) : base(value)
    {
    }

    public static readonly ReadingLevel Plain = new("plain");

    public static readonly ReadingLevel Elementary = new("elementary");

    public static readonly ReadingLevel MiddleSchool = new("middle_school");

    public static readonly ReadingLevel HighSchool = new("high_school");

    public TResult Match<TResult>(Func<TResult> onPlain,
        Func<TResult> onElementary,
        Func<TResult> onMiddleSchool,
        Func<TResult> onHighSchool,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Plain => onPlain(),
            _ when this == Elementary => onElementary(),
            _ when this == MiddleSchool => onMiddleSchool(),
            _ when this == HighSchool => onHighSchool(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlain,
        Action onElementary,
        Action onMiddleSchool,
        Action onHighSchool,
        Action<string> otherwise)
    {
        if (this == Plain) onPlain();
        else if (this == Elementary) onElementary();
        else if (this == MiddleSchool) onMiddleSchool();
        else if (this == HighSchool) onHighSchool();
        else otherwise(Value);
    }
}
