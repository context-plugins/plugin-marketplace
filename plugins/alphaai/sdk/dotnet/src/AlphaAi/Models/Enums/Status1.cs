using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Available = new("available");

    public static readonly Status1 Unavailable = new("unavailable");

    public TResult Match<TResult>(Func<TResult> onAvailable,
        Func<TResult> onUnavailable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Available => onAvailable(),
            _ when this == Unavailable => onUnavailable(),
            _ => otherwise(Value)
        };

    public void Match(Action onAvailable, Action onUnavailable, Action<string> otherwise)
    {
        if (this == Available) onAvailable();
        else if (this == Unavailable) onUnavailable();
        else otherwise(Value);
    }
}
