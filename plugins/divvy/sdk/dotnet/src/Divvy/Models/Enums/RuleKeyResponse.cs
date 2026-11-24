using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Response enum of allowed keys for bill policy approval.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RuleKeyResponse>))]
public sealed record RuleKeyResponse : OpenStringEnum<RuleKeyResponse>
{
    private RuleKeyResponse(string value) : base(value)
    {
    }

    public static readonly RuleKeyResponse BillAmount = new("BILL_AMOUNT");

    public static readonly RuleKeyResponse BillLineItemAmount = new("BILL_LINE_ITEM_AMOUNT");

    public static readonly RuleKeyResponse AccountingClassId = new("ACCOUNTING_CLASS_ID");

    public static readonly RuleKeyResponse ChartOfAccountId = new("CHART_OF_ACCOUNT_ID");

    public static readonly RuleKeyResponse CustomerId = new("CUSTOMER_ID");

    public static readonly RuleKeyResponse DepartmentId = new("DEPARTMENT_ID");

    public static readonly RuleKeyResponse EmployeeId = new("EMPLOYEE_ID");

    public static readonly RuleKeyResponse JobId = new("JOB_ID");

    public static readonly RuleKeyResponse LocationId = new("LOCATION_ID");

    public static readonly RuleKeyResponse VendorId = new("VENDOR_ID");

    public static readonly RuleKeyResponse Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onBillAmount,
        Func<TResult> onBillLineItemAmount,
        Func<TResult> onAccountingClassId,
        Func<TResult> onChartOfAccountId,
        Func<TResult> onCustomerId,
        Func<TResult> onDepartmentId,
        Func<TResult> onEmployeeId,
        Func<TResult> onJobId,
        Func<TResult> onLocationId,
        Func<TResult> onVendorId,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BillAmount => onBillAmount(),
            _ when this == BillLineItemAmount => onBillLineItemAmount(),
            _ when this == AccountingClassId => onAccountingClassId(),
            _ when this == ChartOfAccountId => onChartOfAccountId(),
            _ when this == CustomerId => onCustomerId(),
            _ when this == DepartmentId => onDepartmentId(),
            _ when this == EmployeeId => onEmployeeId(),
            _ when this == JobId => onJobId(),
            _ when this == LocationId => onLocationId(),
            _ when this == VendorId => onVendorId(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onBillAmount,
        Action onBillLineItemAmount,
        Action onAccountingClassId,
        Action onChartOfAccountId,
        Action onCustomerId,
        Action onDepartmentId,
        Action onEmployeeId,
        Action onJobId,
        Action onLocationId,
        Action onVendorId,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == BillAmount) onBillAmount();
        else if (this == BillLineItemAmount) onBillLineItemAmount();
        else if (this == AccountingClassId) onAccountingClassId();
        else if (this == ChartOfAccountId) onChartOfAccountId();
        else if (this == CustomerId) onCustomerId();
        else if (this == DepartmentId) onDepartmentId();
        else if (this == EmployeeId) onEmployeeId();
        else if (this == JobId) onJobId();
        else if (this == LocationId) onLocationId();
        else if (this == VendorId) onVendorId();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
