using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Held>))]
public sealed record Held : OpenStringEnum<Held>
{
    private Held(string value) : base(value)
    {
    }

    public static readonly Held _1 = new("1");

    public static readonly Held True = new("true");

    public TResult Match<TResult>(Func<TResult> on_1, Func<TResult> onTrue, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1 => on_1(),
            _ when this == True => onTrue(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1, Action onTrue, Action<string> otherwise)
    {
        if (this == _1) on_1();
        else if (this == True) onTrue();
        else otherwise(Value);
    }
}
