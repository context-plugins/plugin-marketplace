using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using FlowAccount.Models.Enums;

namespace FlowAccount.Models;

public record SimpleQuery
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageSize")]
    public int? PageSize { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentPage")]
    public int? CurrentPage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalRecords")]
    public int? TotalRecords { get; init; }

    /// <summary>
    /// 1 = PublishDate
    /// 3 = PaymentDate
    /// 5 = ExpenseDate
    /// 7 = TransitionDate
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dateType")]
    public DateType? DateType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public DateTimeOffset? EndDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day")]
    public int? Day { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("month")]
    public int? Month { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("year")]
    public int? Year { get; init; }

    /// <summary>
    /// 1 = CurrentMonth
    /// 3 = PreviousMonth
    /// 5 = Manual
    /// 7 = CurrentYear
    /// 9 = PreviousYear
    /// 11 = AsAt
    /// 13 = Grid
    /// 15 = FiscalYear
    /// 17 = Months
    /// 19 = Days
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("range")]
    public DataRange? Range { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isFirstCurrent")]
    public int? IsFirstCurrent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hashTags")]
    public IReadOnlyList<string>? HashTags { get; init; }

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
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportType")]
    public ReportTypes? ReportType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public IReadOnlyList<FilterOptions>? Filter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortBy")]
    public IReadOnlyList<SortOptions>? SortBy { get; init; }
}
