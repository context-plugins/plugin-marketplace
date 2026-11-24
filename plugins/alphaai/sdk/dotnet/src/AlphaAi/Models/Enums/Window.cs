using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Window>))]
public sealed record Window : OpenStringEnum<Window>
{
    private Window(string value) : base(value)
    {
    }

    public static readonly Window _4H = new("4h");

    public static readonly Window _24H = new("24h");

    public TResult Match<TResult>(Func<TResult> on_4H, Func<TResult> on_24H, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _4H => on_4H(),
            _ when this == _24H => on_24H(),
            _ => otherwise(Value)
        };

    public void Match(Action on_4H, Action on_24H, Action<string> otherwise)
    {
        if (this == _4H) on_4H();
        else if (this == _24H) on_24H();
        else otherwise(Value);
    }
}
