using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Json = new("json");

    public TResult Match<TResult>(Func<TResult> onJson, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Json => onJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onJson, Action<string> otherwise)
    {
        if (this == Json) onJson();
        else otherwise(Value);
    }
}
