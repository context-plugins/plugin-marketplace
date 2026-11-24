using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<InvoiceSource>))]
public sealed record InvoiceSource : OpenStringEnum<InvoiceSource>
{
    private InvoiceSource(string value) : base(value)
    {
    }

    public static readonly InvoiceSource OrderBased = new("order_based");

    public static readonly InvoiceSource Manual = new("manual");

    public TResult Match<TResult>(Func<TResult> onOrderBased,
        Func<TResult> onManual,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OrderBased => onOrderBased(),
            _ when this == Manual => onManual(),
            _ => otherwise(Value)
        };

    public void Match(Action onOrderBased, Action onManual, Action<string> otherwise)
    {
        if (this == OrderBased) onOrderBased();
        else if (this == Manual) onManual();
        else otherwise(Value);
    }
}
