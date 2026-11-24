using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The variant of the quote block.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<QuoteVariant>))]
public sealed record QuoteVariant : OpenStringEnum<QuoteVariant>
{
    private QuoteVariant(string value) : base(value)
    {
    }

    public static readonly QuoteVariant Block = new("block");

    public static readonly QuoteVariant Inline = new("inline");

    public static readonly QuoteVariant Quotation = new("quotation");

    public TResult Match<TResult>(Func<TResult> onBlock,
        Func<TResult> onInline,
        Func<TResult> onQuotation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Block => onBlock(),
            _ when this == Inline => onInline(),
            _ when this == Quotation => onQuotation(),
            _ => otherwise(Value)
        };

    public void Match(Action onBlock, Action onInline, Action onQuotation, Action<string> otherwise)
    {
        if (this == Block) onBlock();
        else if (this == Inline) onInline();
        else if (this == Quotation) onQuotation();
        else otherwise(Value);
    }
}
