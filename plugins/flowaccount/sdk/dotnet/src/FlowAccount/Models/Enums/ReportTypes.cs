using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 10 = Sales
/// 11 = SalesTeamReport
/// 12 = SalesTax
/// 13 = SimpleSales
/// 14 = AccountReceivable
/// 15 = AccountReceivableAging
/// 20 = Purchase
/// 21 = PurchaseTax
/// 22 = AccountPayable
/// 23 = AccountPayableAging
/// 24 = PurchaseByProduct
/// 25 = PurchaseByProductAdvance
/// 30 = Clients
/// 40 = Vendor
/// 50 = PaymentCollection
/// 60 = SalesByProduct
/// 61 = SalesByProductAdvance
/// 62 = SalesByPerson
/// 63 = SalesByPersonAdvance
/// 64 = SalesByCustomer
/// 65 = SalesByCustomerAdvance
/// 70 = Quotation
/// 80 = BillingNote
/// 90 = ReceiveInventory
/// 91 = StocksReport
/// 92 = GroupStockReport
/// 100 = Expense
/// 110 = WithHoldingTax
/// 120 = ProfitAndLossOneMonth
/// 121 = ProfitAndLossMultipleMonth
/// 130 = Receipt
/// 140 = CreditNote
/// 150 = DebitNote
/// 160 = TaxInvoice
/// 170 = Payroll
/// 171 = PayrollSummary
/// 172 = PayrollGroup
/// 173 = PayrollSscSummary
/// 180 = ContactGrid
/// 190 = ProductGrid
/// 200 = ExportContact
/// 210 = ExportProduct
/// 220 = Receivables
/// 240 = Payables
/// 260 = GeneralLedger
/// 270 = JournalEntry
/// 280 = Payment
/// 290 = InputTax
/// 291 = OutputTax
/// 292 = FixedAsset
/// 293 = Depreciation
/// 300 = PaymentSlip
/// </summary>
[JsonConverter(typeof(IntEnumConverter<ReportTypes>))]
public sealed record ReportTypes : OpenIntEnum<ReportTypes>
{
    private ReportTypes(long value) : base(value)
    {
    }

    public static readonly ReportTypes Value10 = new(10L);

    public static readonly ReportTypes Value11 = new(11L);

    public static readonly ReportTypes Value12 = new(12L);

    public static readonly ReportTypes Value13 = new(13L);

    public static readonly ReportTypes Value14 = new(14L);

    public static readonly ReportTypes Value15 = new(15L);

    public static readonly ReportTypes Value20 = new(20L);

    public static readonly ReportTypes Value21 = new(21L);

    public static readonly ReportTypes Value22 = new(22L);

    public static readonly ReportTypes Value23 = new(23L);

    public static readonly ReportTypes Value24 = new(24L);

    public static readonly ReportTypes Value25 = new(25L);

    public static readonly ReportTypes Value30 = new(30L);

    public static readonly ReportTypes Value40 = new(40L);

    public static readonly ReportTypes Value50 = new(50L);

    public static readonly ReportTypes Value60 = new(60L);

    public static readonly ReportTypes Value61 = new(61L);

    public static readonly ReportTypes Value62 = new(62L);

    public static readonly ReportTypes Value63 = new(63L);

    public static readonly ReportTypes Value64 = new(64L);

    public static readonly ReportTypes Value65 = new(65L);

    public static readonly ReportTypes Value70 = new(70L);

    public static readonly ReportTypes Value80 = new(80L);

    public static readonly ReportTypes Value90 = new(90L);

    public static readonly ReportTypes Value91 = new(91L);

    public static readonly ReportTypes Value92 = new(92L);

    public static readonly ReportTypes Value100 = new(100L);

    public static readonly ReportTypes Value110 = new(110L);

    public static readonly ReportTypes Value120 = new(120L);

    public static readonly ReportTypes Value121 = new(121L);

    public static readonly ReportTypes Value130 = new(130L);

    public static readonly ReportTypes Value140 = new(140L);

    public static readonly ReportTypes Value150 = new(150L);

    public static readonly ReportTypes Value160 = new(160L);

    public static readonly ReportTypes Value170 = new(170L);

    public static readonly ReportTypes Value171 = new(171L);

    public static readonly ReportTypes Value172 = new(172L);

    public static readonly ReportTypes Value173 = new(173L);

    public static readonly ReportTypes Value180 = new(180L);

    public static readonly ReportTypes Value190 = new(190L);

    public static readonly ReportTypes Value200 = new(200L);

    public static readonly ReportTypes Value210 = new(210L);

    public static readonly ReportTypes Value220 = new(220L);

    public static readonly ReportTypes Value240 = new(240L);

    public static readonly ReportTypes Value260 = new(260L);

    public static readonly ReportTypes Value270 = new(270L);

    public static readonly ReportTypes Value280 = new(280L);

    public static readonly ReportTypes Value290 = new(290L);

    public static readonly ReportTypes Value291 = new(291L);

    public static readonly ReportTypes Value292 = new(292L);

    public static readonly ReportTypes Value293 = new(293L);

    public static readonly ReportTypes Value300 = new(300L);

    public TResult Match<TResult>(Func<TResult> onValue10,
        Func<TResult> onValue11,
        Func<TResult> onValue12,
        Func<TResult> onValue13,
        Func<TResult> onValue14,
        Func<TResult> onValue15,
        Func<TResult> onValue20,
        Func<TResult> onValue21,
        Func<TResult> onValue22,
        Func<TResult> onValue23,
        Func<TResult> onValue24,
        Func<TResult> onValue25,
        Func<TResult> onValue30,
        Func<TResult> onValue40,
        Func<TResult> onValue50,
        Func<TResult> onValue60,
        Func<TResult> onValue61,
        Func<TResult> onValue62,
        Func<TResult> onValue63,
        Func<TResult> onValue64,
        Func<TResult> onValue65,
        Func<TResult> onValue70,
        Func<TResult> onValue80,
        Func<TResult> onValue90,
        Func<TResult> onValue91,
        Func<TResult> onValue92,
        Func<TResult> onValue100,
        Func<TResult> onValue110,
        Func<TResult> onValue120,
        Func<TResult> onValue121,
        Func<TResult> onValue130,
        Func<TResult> onValue140,
        Func<TResult> onValue150,
        Func<TResult> onValue160,
        Func<TResult> onValue170,
        Func<TResult> onValue171,
        Func<TResult> onValue172,
        Func<TResult> onValue173,
        Func<TResult> onValue180,
        Func<TResult> onValue190,
        Func<TResult> onValue200,
        Func<TResult> onValue210,
        Func<TResult> onValue220,
        Func<TResult> onValue240,
        Func<TResult> onValue260,
        Func<TResult> onValue270,
        Func<TResult> onValue280,
        Func<TResult> onValue290,
        Func<TResult> onValue291,
        Func<TResult> onValue292,
        Func<TResult> onValue293,
        Func<TResult> onValue300,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value10 => onValue10(),
            _ when this == Value11 => onValue11(),
            _ when this == Value12 => onValue12(),
            _ when this == Value13 => onValue13(),
            _ when this == Value14 => onValue14(),
            _ when this == Value15 => onValue15(),
            _ when this == Value20 => onValue20(),
            _ when this == Value21 => onValue21(),
            _ when this == Value22 => onValue22(),
            _ when this == Value23 => onValue23(),
            _ when this == Value24 => onValue24(),
            _ when this == Value25 => onValue25(),
            _ when this == Value30 => onValue30(),
            _ when this == Value40 => onValue40(),
            _ when this == Value50 => onValue50(),
            _ when this == Value60 => onValue60(),
            _ when this == Value61 => onValue61(),
            _ when this == Value62 => onValue62(),
            _ when this == Value63 => onValue63(),
            _ when this == Value64 => onValue64(),
            _ when this == Value65 => onValue65(),
            _ when this == Value70 => onValue70(),
            _ when this == Value80 => onValue80(),
            _ when this == Value90 => onValue90(),
            _ when this == Value91 => onValue91(),
            _ when this == Value92 => onValue92(),
            _ when this == Value100 => onValue100(),
            _ when this == Value110 => onValue110(),
            _ when this == Value120 => onValue120(),
            _ when this == Value121 => onValue121(),
            _ when this == Value130 => onValue130(),
            _ when this == Value140 => onValue140(),
            _ when this == Value150 => onValue150(),
            _ when this == Value160 => onValue160(),
            _ when this == Value170 => onValue170(),
            _ when this == Value171 => onValue171(),
            _ when this == Value172 => onValue172(),
            _ when this == Value173 => onValue173(),
            _ when this == Value180 => onValue180(),
            _ when this == Value190 => onValue190(),
            _ when this == Value200 => onValue200(),
            _ when this == Value210 => onValue210(),
            _ when this == Value220 => onValue220(),
            _ when this == Value240 => onValue240(),
            _ when this == Value260 => onValue260(),
            _ when this == Value270 => onValue270(),
            _ when this == Value280 => onValue280(),
            _ when this == Value290 => onValue290(),
            _ when this == Value291 => onValue291(),
            _ when this == Value292 => onValue292(),
            _ when this == Value293 => onValue293(),
            _ when this == Value300 => onValue300(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue10,
        Action onValue11,
        Action onValue12,
        Action onValue13,
        Action onValue14,
        Action onValue15,
        Action onValue20,
        Action onValue21,
        Action onValue22,
        Action onValue23,
        Action onValue24,
        Action onValue25,
        Action onValue30,
        Action onValue40,
        Action onValue50,
        Action onValue60,
        Action onValue61,
        Action onValue62,
        Action onValue63,
        Action onValue64,
        Action onValue65,
        Action onValue70,
        Action onValue80,
        Action onValue90,
        Action onValue91,
        Action onValue92,
        Action onValue100,
        Action onValue110,
        Action onValue120,
        Action onValue121,
        Action onValue130,
        Action onValue140,
        Action onValue150,
        Action onValue160,
        Action onValue170,
        Action onValue171,
        Action onValue172,
        Action onValue173,
        Action onValue180,
        Action onValue190,
        Action onValue200,
        Action onValue210,
        Action onValue220,
        Action onValue240,
        Action onValue260,
        Action onValue270,
        Action onValue280,
        Action onValue290,
        Action onValue291,
        Action onValue292,
        Action onValue293,
        Action onValue300,
        Action<long> otherwise)
    {
        if (this == Value10) onValue10();
        else if (this == Value11) onValue11();
        else if (this == Value12) onValue12();
        else if (this == Value13) onValue13();
        else if (this == Value14) onValue14();
        else if (this == Value15) onValue15();
        else if (this == Value20) onValue20();
        else if (this == Value21) onValue21();
        else if (this == Value22) onValue22();
        else if (this == Value23) onValue23();
        else if (this == Value24) onValue24();
        else if (this == Value25) onValue25();
        else if (this == Value30) onValue30();
        else if (this == Value40) onValue40();
        else if (this == Value50) onValue50();
        else if (this == Value60) onValue60();
        else if (this == Value61) onValue61();
        else if (this == Value62) onValue62();
        else if (this == Value63) onValue63();
        else if (this == Value64) onValue64();
        else if (this == Value65) onValue65();
        else if (this == Value70) onValue70();
        else if (this == Value80) onValue80();
        else if (this == Value90) onValue90();
        else if (this == Value91) onValue91();
        else if (this == Value92) onValue92();
        else if (this == Value100) onValue100();
        else if (this == Value110) onValue110();
        else if (this == Value120) onValue120();
        else if (this == Value121) onValue121();
        else if (this == Value130) onValue130();
        else if (this == Value140) onValue140();
        else if (this == Value150) onValue150();
        else if (this == Value160) onValue160();
        else if (this == Value170) onValue170();
        else if (this == Value171) onValue171();
        else if (this == Value172) onValue172();
        else if (this == Value173) onValue173();
        else if (this == Value180) onValue180();
        else if (this == Value190) onValue190();
        else if (this == Value200) onValue200();
        else if (this == Value210) onValue210();
        else if (this == Value220) onValue220();
        else if (this == Value240) onValue240();
        else if (this == Value260) onValue260();
        else if (this == Value270) onValue270();
        else if (this == Value280) onValue280();
        else if (this == Value290) onValue290();
        else if (this == Value291) onValue291();
        else if (this == Value292) onValue292();
        else if (this == Value293) onValue293();
        else if (this == Value300) onValue300();
        else otherwise(Value);
    }
}
