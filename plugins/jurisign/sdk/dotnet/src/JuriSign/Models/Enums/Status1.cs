using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Active = new("active");

    public static readonly Status1 Paused = new("paused");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onPaused, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Paused => onPaused(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onPaused, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Paused) onPaused();
        else otherwise(Value);
    }
}
