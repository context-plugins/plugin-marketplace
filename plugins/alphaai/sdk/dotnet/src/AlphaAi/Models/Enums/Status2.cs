using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Available = new("available");

    public static readonly Status2 Unsupported = new("unsupported");

    public static readonly Status2 Unavailable = new("unavailable");

    public TResult Match<TResult>(Func<TResult> onAvailable,
        Func<TResult> onUnsupported,
        Func<TResult> onUnavailable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Available => onAvailable(),
            _ when this == Unsupported => onUnsupported(),
            _ when this == Unavailable => onUnavailable(),
            _ => otherwise(Value)
        };

    public void Match(Action onAvailable, Action onUnsupported, Action onUnavailable, Action<string> otherwise)
    {
        if (this == Available) onAvailable();
        else if (this == Unsupported) onUnsupported();
        else if (this == Unavailable) onUnavailable();
        else otherwise(Value);
    }
}
