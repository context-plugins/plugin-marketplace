using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Depth>))]
public sealed record Depth : OpenStringEnum<Depth>
{
    private Depth(string value) : base(value)
    {
    }

    public static readonly Depth Direct = new("direct");

    public static readonly Depth Transitive = new("transitive");

    public TResult Match<TResult>(Func<TResult> onDirect,
        Func<TResult> onTransitive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Direct => onDirect(),
            _ when this == Transitive => onTransitive(),
            _ => otherwise(Value)
        };

    public void Match(Action onDirect, Action onTransitive, Action<string> otherwise)
    {
        if (this == Direct) onDirect();
        else if (this == Transitive) onTransitive();
        else otherwise(Value);
    }
}
