using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Prefix>))]
public sealed record Prefix : OpenStringEnum<Prefix>
{
    private Prefix(string value) : base(value)
    {
    }

    public static readonly Prefix _800 = new("800");

    public static readonly Prefix _822 = new("822");

    public static readonly Prefix _833 = new("833");

    public static readonly Prefix _844 = new("844");

    public static readonly Prefix _855 = new("855");

    public static readonly Prefix _866 = new("866");

    public static readonly Prefix _877 = new("877");

    public static readonly Prefix _888 = new("888");

    public TResult Match<TResult>(Func<TResult> on_800,
        Func<TResult> on_822,
        Func<TResult> on_833,
        Func<TResult> on_844,
        Func<TResult> on_855,
        Func<TResult> on_866,
        Func<TResult> on_877,
        Func<TResult> on_888,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _800 => on_800(),
            _ when this == _822 => on_822(),
            _ when this == _833 => on_833(),
            _ when this == _844 => on_844(),
            _ when this == _855 => on_855(),
            _ when this == _866 => on_866(),
            _ when this == _877 => on_877(),
            _ when this == _888 => on_888(),
            _ => otherwise(Value)
        };

    public void Match(Action on_800,
        Action on_822,
        Action on_833,
        Action on_844,
        Action on_855,
        Action on_866,
        Action on_877,
        Action on_888,
        Action<string> otherwise)
    {
        if (this == _800) on_800();
        else if (this == _822) on_822();
        else if (this == _833) on_833();
        else if (this == _844) on_844();
        else if (this == _855) on_855();
        else if (this == _866) on_866();
        else if (this == _877) on_877();
        else if (this == _888) on_888();
        else otherwise(Value);
    }
}
