using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// How the product is rendered in the response. Absent for a gpt-6 product card.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RenderAs1>))]
public sealed record RenderAs1 : OpenStringEnum<RenderAs1>
{
    private RenderAs1(string value) : base(value)
    {
    }

    public static readonly RenderAs1 Inline = new("inline");

    public static readonly RenderAs1 Hero = new("hero");

    public static readonly RenderAs1 Block = new("block");

    public TResult Match<TResult>(Func<TResult> onInline,
        Func<TResult> onHero,
        Func<TResult> onBlock,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Inline => onInline(),
            _ when this == Hero => onHero(),
            _ when this == Block => onBlock(),
            _ => otherwise(Value)
        };

    public void Match(Action onInline, Action onHero, Action onBlock, Action<string> otherwise)
    {
        if (this == Inline) onInline();
        else if (this == Hero) onHero();
        else if (this == Block) onBlock();
        else otherwise(Value);
    }
}
