using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// How the product is rendered in the response
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RenderAs>))]
public sealed record RenderAs : OpenStringEnum<RenderAs>
{
    private RenderAs(string value) : base(value)
    {
    }

    public static readonly RenderAs Inline = new("inline");

    public static readonly RenderAs Hero = new("hero");

    public static readonly RenderAs Block = new("block");

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
