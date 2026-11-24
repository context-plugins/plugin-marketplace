using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format1>))]
public sealed record Format1 : OpenStringEnum<Format1>
{
    private Format1(string value) : base(value)
    {
    }

    public static readonly Format1 Meta = new("meta");

    public static readonly Format1 Rendered = new("rendered");

    public TResult Match<TResult>(Func<TResult> onMeta, Func<TResult> onRendered, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Meta => onMeta(),
            _ when this == Rendered => onRendered(),
            _ => otherwise(Value)
        };

    public void Match(Action onMeta, Action onRendered, Action<string> otherwise)
    {
        if (this == Meta) onMeta();
        else if (this == Rendered) onRendered();
        else otherwise(Value);
    }
}
