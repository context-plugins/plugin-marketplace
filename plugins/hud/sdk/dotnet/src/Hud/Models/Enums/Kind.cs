using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Environment = new("environment");

    public TResult Match<TResult>(Func<TResult> onEnvironment, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Environment => onEnvironment(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnvironment, Action<string> otherwise)
    {
        if (this == Environment) onEnvironment();
        else otherwise(Value);
    }
}
