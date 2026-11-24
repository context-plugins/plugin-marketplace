using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Meta = new("meta");

    public TResult Match<TResult>(Func<TResult> onMeta, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Meta => onMeta(),
            _ => otherwise(Value)
        };

    public void Match(Action onMeta, Action<string> otherwise)
    {
        if (this == Meta) onMeta();
        else otherwise(Value);
    }
}
