using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Purpose>))]
public sealed record Purpose : OpenStringEnum<Purpose>
{
    private Purpose(string value) : base(value)
    {
    }

    public static readonly Purpose Refund = new("refund");

    public static readonly Purpose Cashback = new("cashback");

    public static readonly Purpose Payout = new("payout");

    public static readonly Purpose Salary = new("salary");

    public static readonly Purpose UtilityBill = new("utility bill");

    public static readonly Purpose VendorBill = new("vendor bill");

    public TResult Match<TResult>(Func<TResult> onRefund,
        Func<TResult> onCashback,
        Func<TResult> onPayout,
        Func<TResult> onSalary,
        Func<TResult> onUtilityBill,
        Func<TResult> onVendorBill,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Refund => onRefund(),
            _ when this == Cashback => onCashback(),
            _ when this == Payout => onPayout(),
            _ when this == Salary => onSalary(),
            _ when this == UtilityBill => onUtilityBill(),
            _ when this == VendorBill => onVendorBill(),
            _ => otherwise(Value)
        };

    public void Match(Action onRefund,
        Action onCashback,
        Action onPayout,
        Action onSalary,
        Action onUtilityBill,
        Action onVendorBill,
        Action<string> otherwise)
    {
        if (this == Refund) onRefund();
        else if (this == Cashback) onCashback();
        else if (this == Payout) onPayout();
        else if (this == Salary) onSalary();
        else if (this == UtilityBill) onUtilityBill();
        else if (this == VendorBill) onVendorBill();
        else otherwise(Value);
    }
}
