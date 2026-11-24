using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Harbor = new("harbor");

    public TResult Match<TResult>(Func<TResult> onHarbor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Harbor => onHarbor(),
            _ => otherwise(Value)
        };

    public void Match(Action onHarbor, Action<string> otherwise)
    {
        if (this == Harbor) onHarbor();
        else otherwise(Value);
    }
}
