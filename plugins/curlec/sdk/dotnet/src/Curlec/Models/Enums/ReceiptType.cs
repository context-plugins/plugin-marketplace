using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReceiptType>))]
public sealed record ReceiptType : OpenStringEnum<ReceiptType>
{
    private ReceiptType(string value) : base(value)
    {
    }

    public static readonly ReceiptType TaxInvoice = new("tax_invoice");

    public static readonly ReceiptType SalesInvoice = new("sales_invoice");

    public static readonly ReceiptType BillOfSupply = new("bill_of_supply");

    public static readonly ReceiptType CreditNote = new("credit_note");

    public static readonly ReceiptType DebitNote = new("debit_note");

    public TResult Match<TResult>(Func<TResult> onTaxInvoice,
        Func<TResult> onSalesInvoice,
        Func<TResult> onBillOfSupply,
        Func<TResult> onCreditNote,
        Func<TResult> onDebitNote,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TaxInvoice => onTaxInvoice(),
            _ when this == SalesInvoice => onSalesInvoice(),
            _ when this == BillOfSupply => onBillOfSupply(),
            _ when this == CreditNote => onCreditNote(),
            _ when this == DebitNote => onDebitNote(),
            _ => otherwise(Value)
        };

    public void Match(Action onTaxInvoice,
        Action onSalesInvoice,
        Action onBillOfSupply,
        Action onCreditNote,
        Action onDebitNote,
        Action<string> otherwise)
    {
        if (this == TaxInvoice) onTaxInvoice();
        else if (this == SalesInvoice) onSalesInvoice();
        else if (this == BillOfSupply) onBillOfSupply();
        else if (this == CreditNote) onCreditNote();
        else if (this == DebitNote) onDebitNote();
        else otherwise(Value);
    }
}
