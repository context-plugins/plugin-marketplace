using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Keys for approval rules.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RuleKeyCreateDto>))]
public sealed record RuleKeyCreateDto : OpenStringEnum<RuleKeyCreateDto>
{
    private RuleKeyCreateDto(string value) : base(value)
    {
    }

    public static readonly RuleKeyCreateDto BillAmount = new("BILL_AMOUNT");

    public static readonly RuleKeyCreateDto BillLineItemAmount = new("BILL_LINE_ITEM_AMOUNT");

    public static readonly RuleKeyCreateDto ChartOfAccountId = new("CHART_OF_ACCOUNT_ID");

    public static readonly RuleKeyCreateDto VendorId = new("VENDOR_ID");

    public TResult Match<TResult>(Func<TResult> onBillAmount,
        Func<TResult> onBillLineItemAmount,
        Func<TResult> onChartOfAccountId,
        Func<TResult> onVendorId,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BillAmount => onBillAmount(),
            _ when this == BillLineItemAmount => onBillLineItemAmount(),
            _ when this == ChartOfAccountId => onChartOfAccountId(),
            _ when this == VendorId => onVendorId(),
            _ => otherwise(Value)
        };

    public void Match(Action onBillAmount,
        Action onBillLineItemAmount,
        Action onChartOfAccountId,
        Action onVendorId,
        Action<string> otherwise)
    {
        if (this == BillAmount) onBillAmount();
        else if (this == BillLineItemAmount) onBillLineItemAmount();
        else if (this == ChartOfAccountId) onChartOfAccountId();
        else if (this == VendorId) onVendorId();
        else otherwise(Value);
    }
}
