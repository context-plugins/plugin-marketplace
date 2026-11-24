using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Audience>))]
public sealed record Audience : OpenStringEnum<Audience>
{
    private Audience(string value) : base(value)
    {
    }

    public static readonly Audience User = new("user");

    public static readonly Audience Assistant = new("assistant");

    public TResult Match<TResult>(Func<TResult> onUser, Func<TResult> onAssistant, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == Assistant => onAssistant(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser, Action onAssistant, Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == Assistant) onAssistant();
        else otherwise(Value);
    }
}
