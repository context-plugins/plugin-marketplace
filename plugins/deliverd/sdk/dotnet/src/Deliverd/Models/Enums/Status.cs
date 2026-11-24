using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Active = new("active");

    public static readonly Status Disabled = new("disabled");

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
