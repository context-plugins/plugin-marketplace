using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The type of quote block. Defaults to "block".
/// </summary>
[JsonConverter(typeof(StringEnumConverter<QuoteVariant1>))]
public sealed record QuoteVariant1 : OpenStringEnum<QuoteVariant1>
{
    private QuoteVariant1(string value) : base(value)
    {
    }

    public static readonly QuoteVariant1 Block = new("block");

    public static readonly QuoteVariant1 Inline = new("inline");

    public static readonly QuoteVariant1 Quotation = new("quotation");

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
