using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<InvoiceStatusPaidOrdersApi>))]
public sealed record InvoiceStatusPaidOrdersApi : OpenStringEnum<InvoiceStatusPaidOrdersApi>
{
    private InvoiceStatusPaidOrdersApi(string value) : base(value)
    {
    }

    public static readonly InvoiceStatusPaidOrdersApi Draft = new("draft");

    public static readonly InvoiceStatusPaidOrdersApi Open = new("open");

    public static readonly InvoiceStatusPaidOrdersApi Paid = new("paid");

    public static readonly InvoiceStatusPaidOrdersApi Void = new("void");

    public static readonly InvoiceStatusPaidOrdersApi Uncollectible = new("uncollectible");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onOpen,
        Func<TResult> onPaid,
        Func<TResult> onVoid,
        Func<TResult> onUncollectible,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Open => onOpen(),
            _ when this == Paid => onPaid(),
            _ when this == Void => onVoid(),
            _ when this == Uncollectible => onUncollectible(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onOpen,
        Action onPaid,
        Action onVoid,
        Action onUncollectible,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Open) onOpen();
        else if (this == Paid) onPaid();
        else if (this == Void) onVoid();
        else if (this == Uncollectible) onUncollectible();
        else otherwise(Value);
    }
}
