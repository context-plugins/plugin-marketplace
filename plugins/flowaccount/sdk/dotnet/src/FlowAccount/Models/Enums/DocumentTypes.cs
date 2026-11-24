using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = PurchaseOrder
/// 3 = Quotation
/// 5 = BillingNote
/// 7 = TaxInvoice
/// 9 = Receipt
/// 13 = Expense
/// 15 = Vendor
/// 17 = WithHoldingTax
/// 19 = BillingNotePartials
/// 21 = TaxInvoicePartails
/// 23 = Purchase
/// 24 = PurchaseTax
/// 25 = ReceivableInvoice
/// 29 = AdjustInventory
/// 31 = CreditNote
/// 33 = DebitNote
/// 35 = CashInvoice
/// 37 = PaymentSlip
/// 51 = JournalEntry
/// 53 = PurchaseVoucher
/// 55 = SalesVoucher
/// 57 = PaymentVoucher
/// 59 = ReceivedVoucher
/// 61 = ConversionBalance
/// 63 = Transaction
/// 65 = SupplierInvoice
/// 67 = BatchTaxFiling
/// 69 = FixedAsset
/// 71 = Depreciation
/// 73 = BankTransfer
/// 151 = DraftJournalEntry
/// 153 = DraftPurchaseVoucher
/// 155 = DraftSalesVoucher
/// 157 = DraftPaymentVoucher
/// 159 = DraftReceivedVoucher
/// 201 = Payroll
/// 202 = PayrollDetail
/// 203 = Employee
/// 204 = PayrollPayment
/// </summary>
[JsonConverter(typeof(IntEnumConverter<DocumentTypes>))]
public sealed record DocumentTypes : OpenIntEnum<DocumentTypes>
{
    private DocumentTypes(long value) : base(value)
    {
    }

    public static readonly DocumentTypes Value1 = new(1L);

    public static readonly DocumentTypes Value3 = new(3L);

    public static readonly DocumentTypes Value5 = new(5L);

    public static readonly DocumentTypes Value7 = new(7L);

    public static readonly DocumentTypes Value9 = new(9L);

    public static readonly DocumentTypes Value13 = new(13L);

    public static readonly DocumentTypes Value15 = new(15L);

    public static readonly DocumentTypes Value17 = new(17L);

    public static readonly DocumentTypes Value19 = new(19L);

    public static readonly DocumentTypes Value21 = new(21L);

    public static readonly DocumentTypes Value23 = new(23L);

    public static readonly DocumentTypes Value24 = new(24L);

    public static readonly DocumentTypes Value25 = new(25L);

    public static readonly DocumentTypes Value29 = new(29L);

    public static readonly DocumentTypes Value31 = new(31L);

    public static readonly DocumentTypes Value33 = new(33L);

    public static readonly DocumentTypes Value35 = new(35L);

    public static readonly DocumentTypes Value37 = new(37L);

    public static readonly DocumentTypes Value51 = new(51L);

    public static readonly DocumentTypes Value53 = new(53L);

    public static readonly DocumentTypes Value55 = new(55L);

    public static readonly DocumentTypes Value57 = new(57L);

    public static readonly DocumentTypes Value59 = new(59L);

    public static readonly DocumentTypes Value61 = new(61L);

    public static readonly DocumentTypes Value63 = new(63L);

    public static readonly DocumentTypes Value65 = new(65L);

    public static readonly DocumentTypes Value67 = new(67L);

    public static readonly DocumentTypes Value69 = new(69L);

    public static readonly DocumentTypes Value71 = new(71L);

    public static readonly DocumentTypes Value73 = new(73L);

    public static readonly DocumentTypes Value151 = new(151L);

    public static readonly DocumentTypes Value153 = new(153L);

    public static readonly DocumentTypes Value155 = new(155L);

    public static readonly DocumentTypes Value157 = new(157L);

    public static readonly DocumentTypes Value159 = new(159L);

    public static readonly DocumentTypes Value201 = new(201L);

    public static readonly DocumentTypes Value202 = new(202L);

    public static readonly DocumentTypes Value203 = new(203L);

    public static readonly DocumentTypes Value204 = new(204L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue9,
        Func<TResult> onValue13,
        Func<TResult> onValue15,
        Func<TResult> onValue17,
        Func<TResult> onValue19,
        Func<TResult> onValue21,
        Func<TResult> onValue23,
        Func<TResult> onValue24,
        Func<TResult> onValue25,
        Func<TResult> onValue29,
        Func<TResult> onValue31,
        Func<TResult> onValue33,
        Func<TResult> onValue35,
        Func<TResult> onValue37,
        Func<TResult> onValue51,
        Func<TResult> onValue53,
        Func<TResult> onValue55,
        Func<TResult> onValue57,
        Func<TResult> onValue59,
        Func<TResult> onValue61,
        Func<TResult> onValue63,
        Func<TResult> onValue65,
        Func<TResult> onValue67,
        Func<TResult> onValue69,
        Func<TResult> onValue71,
        Func<TResult> onValue73,
        Func<TResult> onValue151,
        Func<TResult> onValue153,
        Func<TResult> onValue155,
        Func<TResult> onValue157,
        Func<TResult> onValue159,
        Func<TResult> onValue201,
        Func<TResult> onValue202,
        Func<TResult> onValue203,
        Func<TResult> onValue204,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value7 => onValue7(),
            _ when this == Value9 => onValue9(),
            _ when this == Value13 => onValue13(),
            _ when this == Value15 => onValue15(),
            _ when this == Value17 => onValue17(),
            _ when this == Value19 => onValue19(),
            _ when this == Value21 => onValue21(),
            _ when this == Value23 => onValue23(),
            _ when this == Value24 => onValue24(),
            _ when this == Value25 => onValue25(),
            _ when this == Value29 => onValue29(),
            _ when this == Value31 => onValue31(),
            _ when this == Value33 => onValue33(),
            _ when this == Value35 => onValue35(),
            _ when this == Value37 => onValue37(),
            _ when this == Value51 => onValue51(),
            _ when this == Value53 => onValue53(),
            _ when this == Value55 => onValue55(),
            _ when this == Value57 => onValue57(),
            _ when this == Value59 => onValue59(),
            _ when this == Value61 => onValue61(),
            _ when this == Value63 => onValue63(),
            _ when this == Value65 => onValue65(),
            _ when this == Value67 => onValue67(),
            _ when this == Value69 => onValue69(),
            _ when this == Value71 => onValue71(),
            _ when this == Value73 => onValue73(),
            _ when this == Value151 => onValue151(),
            _ when this == Value153 => onValue153(),
            _ when this == Value155 => onValue155(),
            _ when this == Value157 => onValue157(),
            _ when this == Value159 => onValue159(),
            _ when this == Value201 => onValue201(),
            _ when this == Value202 => onValue202(),
            _ when this == Value203 => onValue203(),
            _ when this == Value204 => onValue204(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1,
        Action onValue3,
        Action onValue5,
        Action onValue7,
        Action onValue9,
        Action onValue13,
        Action onValue15,
        Action onValue17,
        Action onValue19,
        Action onValue21,
        Action onValue23,
        Action onValue24,
        Action onValue25,
        Action onValue29,
        Action onValue31,
        Action onValue33,
        Action onValue35,
        Action onValue37,
        Action onValue51,
        Action onValue53,
        Action onValue55,
        Action onValue57,
        Action onValue59,
        Action onValue61,
        Action onValue63,
        Action onValue65,
        Action onValue67,
        Action onValue69,
        Action onValue71,
        Action onValue73,
        Action onValue151,
        Action onValue153,
        Action onValue155,
        Action onValue157,
        Action onValue159,
        Action onValue201,
        Action onValue202,
        Action onValue203,
        Action onValue204,
        Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value7) onValue7();
        else if (this == Value9) onValue9();
        else if (this == Value13) onValue13();
        else if (this == Value15) onValue15();
        else if (this == Value17) onValue17();
        else if (this == Value19) onValue19();
        else if (this == Value21) onValue21();
        else if (this == Value23) onValue23();
        else if (this == Value24) onValue24();
        else if (this == Value25) onValue25();
        else if (this == Value29) onValue29();
        else if (this == Value31) onValue31();
        else if (this == Value33) onValue33();
        else if (this == Value35) onValue35();
        else if (this == Value37) onValue37();
        else if (this == Value51) onValue51();
        else if (this == Value53) onValue53();
        else if (this == Value55) onValue55();
        else if (this == Value57) onValue57();
        else if (this == Value59) onValue59();
        else if (this == Value61) onValue61();
        else if (this == Value63) onValue63();
        else if (this == Value65) onValue65();
        else if (this == Value67) onValue67();
        else if (this == Value69) onValue69();
        else if (this == Value71) onValue71();
        else if (this == Value73) onValue73();
        else if (this == Value151) onValue151();
        else if (this == Value153) onValue153();
        else if (this == Value155) onValue155();
        else if (this == Value157) onValue157();
        else if (this == Value159) onValue159();
        else if (this == Value201) onValue201();
        else if (this == Value202) onValue202();
        else if (this == Value203) onValue203();
        else if (this == Value204) onValue204();
        else otherwise(Value);
    }
}
