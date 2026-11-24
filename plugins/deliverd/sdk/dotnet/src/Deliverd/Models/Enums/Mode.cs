using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode Hosted = new("hosted");

    public static readonly Mode Embedded = new("embedded");

    public TResult Match<TResult>(Func<TResult> onHosted, Func<TResult> onEmbedded, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Hosted => onHosted(),
            _ when this == Embedded => onEmbedded(),
            _ => otherwise(Value)
        };

    public void Match(Action onHosted, Action onEmbedded, Action<string> otherwise)
    {
        if (this == Hosted) onHosted();
        else if (this == Embedded) onEmbedded();
        else otherwise(Value);
    }
}
