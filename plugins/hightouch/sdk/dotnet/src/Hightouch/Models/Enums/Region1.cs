using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Region1>))]
public sealed record Region1 : OpenStringEnum<Region1>
{
    private Region1(string value) : base(value)
    {
    }

    public static readonly Region1 Us = new("us");

    public static readonly Region1 Eu = new("eu");

    public TResult Match<TResult>(Func<TResult> onUs, Func<TResult> onEu, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Us => onUs(),
            _ when this == Eu => onEu(),
            _ => otherwise(Value)
        };

    public void Match(Action onUs, Action onEu, Action<string> otherwise)
    {
        if (this == Us) onUs();
        else if (this == Eu) onEu();
        else otherwise(Value);
    }
}
