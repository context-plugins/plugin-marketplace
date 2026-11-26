using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Enumeration of entities that map from bipaas.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportEntity>))]
public sealed record ExportEntity : OpenStringEnum<ExportEntity>
{
    private ExportEntity(string value) : base(value)
    {
    }

    public static readonly ExportEntity Bill = new("BILL");

    public static readonly ExportEntity Customer = new("CUSTOMER");

    public static readonly ExportEntity ChartOfAccount = new("CHART_OF_ACCOUNT");

    public static readonly ExportEntity Department = new("DEPARTMENT");

    public static readonly ExportEntity Invoice = new("INVOICE");

    public static readonly ExportEntity Item = new("ITEM");

    public static readonly ExportEntity Job = new("JOB");

    public static readonly ExportEntity Vendor = new("VENDOR");

    public static readonly ExportEntity Payment = new("PAYMENT");

    public static readonly ExportEntity Location = new("LOCATION");

    public static readonly ExportEntity Employee = new("EMPLOYEE");

    public static readonly ExportEntity AccountingClass = new("ACCOUNTING_CLASS");

    public static readonly ExportEntity FundTransfer = new("FUND_TRANSFER");

    public static readonly ExportEntity PaymentReceived = new("PAYMENT_RECEIVED");

    public static readonly ExportEntity VendorCredit = new("VENDOR_CREDIT");

    public static readonly ExportEntity CreditMemo = new("CREDIT_MEMO");

    public static readonly ExportEntity PaymentTerm = new("PAYMENT_TERM");

    public static readonly ExportEntity BillLineItem = new("BILL_LINE_ITEM");

    public static readonly ExportEntity User = new("USER");

    public static readonly ExportEntity CustomerCreditLineItem = new("CUSTOMER_CREDIT_LINE_ITEM");

    public static readonly ExportEntity AchPaymentHistory = new("ACH_PAYMENT_HISTORY");

    public static readonly ExportEntity InvoiceLineItem = new("INVOICE_LINE_ITEM");

    public static readonly ExportEntity ReceivableCustomField = new("RECEIVABLE_CUSTOM_FIELD");

    public static readonly ExportEntity BillPayment = new("BILL_PAYMENT");

    public static readonly ExportEntity InvoicePayment = new("INVOICE_PAYMENT");

    public static readonly ExportEntity VendorCreditLineItem = new("VENDOR_CREDIT_LINE_ITEM");

    public static readonly ExportEntity AmortizationSchedule = new("AMORTIZATION_SCHEDULE");

    public static readonly ExportEntity JournalEntry = new("JOURNAL_ENTRY");

    public static readonly ExportEntity IntegrationStatus = new("INTEGRATION_STATUS");

    public static readonly ExportEntity CardTransaction = new("CARD_TRANSACTION");

    public static readonly ExportEntity Reimbursement = new("REIMBURSEMENT");

    public static readonly ExportEntity PurchaseOrder = new("PURCHASE_ORDER");

    public static readonly ExportEntity PurchaseOrderLineItem = new("PURCHASE_ORDER_LINE_ITEM");

    public static readonly ExportEntity PaymentFees = new("PAYMENT_FEES");

    public static readonly ExportEntity Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onBill,
        Func<TResult> onCustomer,
        Func<TResult> onChartOfAccount,
        Func<TResult> onDepartment,
        Func<TResult> onInvoice,
        Func<TResult> onItem,
        Func<TResult> onJob,
        Func<TResult> onVendor,
        Func<TResult> onPayment,
        Func<TResult> onLocation,
        Func<TResult> onEmployee,
        Func<TResult> onAccountingClass,
        Func<TResult> onFundTransfer,
        Func<TResult> onPaymentReceived,
        Func<TResult> onVendorCredit,
        Func<TResult> onCreditMemo,
        Func<TResult> onPaymentTerm,
        Func<TResult> onBillLineItem,
        Func<TResult> onUser,
        Func<TResult> onCustomerCreditLineItem,
        Func<TResult> onAchPaymentHistory,
        Func<TResult> onInvoiceLineItem,
        Func<TResult> onReceivableCustomField,
        Func<TResult> onBillPayment,
        Func<TResult> onInvoicePayment,
        Func<TResult> onVendorCreditLineItem,
        Func<TResult> onAmortizationSchedule,
        Func<TResult> onJournalEntry,
        Func<TResult> onIntegrationStatus,
        Func<TResult> onCardTransaction,
        Func<TResult> onReimbursement,
        Func<TResult> onPurchaseOrder,
        Func<TResult> onPurchaseOrderLineItem,
        Func<TResult> onPaymentFees,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bill => onBill(),
            _ when this == Customer => onCustomer(),
            _ when this == ChartOfAccount => onChartOfAccount(),
            _ when this == Department => onDepartment(),
            _ when this == Invoice => onInvoice(),
            _ when this == Item => onItem(),
            _ when this == Job => onJob(),
            _ when this == Vendor => onVendor(),
            _ when this == Payment => onPayment(),
            _ when this == Location => onLocation(),
            _ when this == Employee => onEmployee(),
            _ when this == AccountingClass => onAccountingClass(),
            _ when this == FundTransfer => onFundTransfer(),
            _ when this == PaymentReceived => onPaymentReceived(),
            _ when this == VendorCredit => onVendorCredit(),
            _ when this == CreditMemo => onCreditMemo(),
            _ when this == PaymentTerm => onPaymentTerm(),
            _ when this == BillLineItem => onBillLineItem(),
            _ when this == User => onUser(),
            _ when this == CustomerCreditLineItem => onCustomerCreditLineItem(),
            _ when this == AchPaymentHistory => onAchPaymentHistory(),
            _ when this == InvoiceLineItem => onInvoiceLineItem(),
            _ when this == ReceivableCustomField => onReceivableCustomField(),
            _ when this == BillPayment => onBillPayment(),
            _ when this == InvoicePayment => onInvoicePayment(),
            _ when this == VendorCreditLineItem => onVendorCreditLineItem(),
            _ when this == AmortizationSchedule => onAmortizationSchedule(),
            _ when this == JournalEntry => onJournalEntry(),
            _ when this == IntegrationStatus => onIntegrationStatus(),
            _ when this == CardTransaction => onCardTransaction(),
            _ when this == Reimbursement => onReimbursement(),
            _ when this == PurchaseOrder => onPurchaseOrder(),
            _ when this == PurchaseOrderLineItem => onPurchaseOrderLineItem(),
            _ when this == PaymentFees => onPaymentFees(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onBill,
        Action onCustomer,
        Action onChartOfAccount,
        Action onDepartment,
        Action onInvoice,
        Action onItem,
        Action onJob,
        Action onVendor,
        Action onPayment,
        Action onLocation,
        Action onEmployee,
        Action onAccountingClass,
        Action onFundTransfer,
        Action onPaymentReceived,
        Action onVendorCredit,
        Action onCreditMemo,
        Action onPaymentTerm,
        Action onBillLineItem,
        Action onUser,
        Action onCustomerCreditLineItem,
        Action onAchPaymentHistory,
        Action onInvoiceLineItem,
        Action onReceivableCustomField,
        Action onBillPayment,
        Action onInvoicePayment,
        Action onVendorCreditLineItem,
        Action onAmortizationSchedule,
        Action onJournalEntry,
        Action onIntegrationStatus,
        Action onCardTransaction,
        Action onReimbursement,
        Action onPurchaseOrder,
        Action onPurchaseOrderLineItem,
        Action onPaymentFees,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Bill) onBill();
        else if (this == Customer) onCustomer();
        else if (this == ChartOfAccount) onChartOfAccount();
        else if (this == Department) onDepartment();
        else if (this == Invoice) onInvoice();
        else if (this == Item) onItem();
        else if (this == Job) onJob();
        else if (this == Vendor) onVendor();
        else if (this == Payment) onPayment();
        else if (this == Location) onLocation();
        else if (this == Employee) onEmployee();
        else if (this == AccountingClass) onAccountingClass();
        else if (this == FundTransfer) onFundTransfer();
        else if (this == PaymentReceived) onPaymentReceived();
        else if (this == VendorCredit) onVendorCredit();
        else if (this == CreditMemo) onCreditMemo();
        else if (this == PaymentTerm) onPaymentTerm();
        else if (this == BillLineItem) onBillLineItem();
        else if (this == User) onUser();
        else if (this == CustomerCreditLineItem) onCustomerCreditLineItem();
        else if (this == AchPaymentHistory) onAchPaymentHistory();
        else if (this == InvoiceLineItem) onInvoiceLineItem();
        else if (this == ReceivableCustomField) onReceivableCustomField();
        else if (this == BillPayment) onBillPayment();
        else if (this == InvoicePayment) onInvoicePayment();
        else if (this == VendorCreditLineItem) onVendorCreditLineItem();
        else if (this == AmortizationSchedule) onAmortizationSchedule();
        else if (this == JournalEntry) onJournalEntry();
        else if (this == IntegrationStatus) onIntegrationStatus();
        else if (this == CardTransaction) onCardTransaction();
        else if (this == Reimbursement) onReimbursement();
        else if (this == PurchaseOrder) onPurchaseOrder();
        else if (this == PurchaseOrderLineItem) onPurchaseOrderLineItem();
        else if (this == PaymentFees) onPaymentFees();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
