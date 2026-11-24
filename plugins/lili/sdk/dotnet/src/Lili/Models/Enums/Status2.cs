using System;
using System.Text.Json.Serialization;
using Lili.Core.Enum;

namespace Lili.Models.Enums;

/// <summary>
/// The status of the webhook
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Active = new("ACTIVE");

    public static readonly Status2 Disabled = new("DISABLED");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onDisabled, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDisabled, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
