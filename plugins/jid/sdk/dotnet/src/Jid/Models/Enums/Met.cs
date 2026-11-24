using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Met>))]
public sealed record Met : OpenStringEnum<Met>
{
    private Met(string value) : base(value)
    {
    }

    public static readonly Met Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onUnknown, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnknown, Action<string> otherwise)
    {
        if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
