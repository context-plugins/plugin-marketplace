using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The level of the header.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HeadingLevel>))]
public sealed record HeadingLevel : OpenStringEnum<HeadingLevel>
{
    private HeadingLevel(string value) : base(value)
    {
    }

    public static readonly HeadingLevel _1 = new("1");

    public static readonly HeadingLevel _2 = new("2");

    public static readonly HeadingLevel _3 = new("3");

    public static readonly HeadingLevel _4 = new("4");

    public static readonly HeadingLevel _5 = new("5");

    public static readonly HeadingLevel _6 = new("6");

    public TResult Match<TResult>(Func<TResult> on_1,
        Func<TResult> on_2,
        Func<TResult> on_3,
        Func<TResult> on_4,
        Func<TResult> on_5,
        Func<TResult> on_6,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1 => on_1(),
            _ when this == _2 => on_2(),
            _ when this == _3 => on_3(),
            _ when this == _4 => on_4(),
            _ when this == _5 => on_5(),
            _ when this == _6 => on_6(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1,
        Action on_2,
        Action on_3,
        Action on_4,
        Action on_5,
        Action on_6,
        Action<string> otherwise)
    {
        if (this == _1) on_1();
        else if (this == _2) on_2();
        else if (this == _3) on_3();
        else if (this == _4) on_4();
        else if (this == _5) on_5();
        else if (this == _6) on_6();
        else otherwise(Value);
    }
}
