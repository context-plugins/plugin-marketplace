from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.business_type import BusinessTypeOrInt
from .enums.document_templates import DocumentTemplatesOrInt
from .enums.running_number_type import RunningNumberTypeOrInt
from .enums.template_font import TemplateFontOrInt


class CompanyPreferences(SdkBaseModel):
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    show_with_holding: bool = Field(default=False, alias="showWithHolding")
    invoice_prefix: str = Field(alias="invoicePrefix")
    quotation_prefix: str = Field(alias="quotationPrefix")
    billing_note_prefix: str = Field(alias="billingNotePrefix")
    receipt_prefix: str = Field(alias="receiptPrefix")
    purchase_order_prefix: str = Field(alias="purchaseOrderPrefix")
    cash_invoice_prefix: str = Field(alias="cashInvoicePrefix")
    receivable_invoice_prefix: str = Field(alias="receivableInvoicePrefix")
    cash_invoice_starting_number: Optional[int] = Field(default=UNSET, alias="cashInvoiceStartingNumber")
    receipt_starting_number: Optional[int] = Field(default=UNSET, alias="receiptStartingNumber")
    quotation_starting_number: Optional[int] = Field(default=UNSET, alias="quotationStartingNumber")
    billing_note_starting_number: Optional[int] = Field(default=UNSET, alias="billingNoteStartingNumber")
    purchase_order_starting_number: Optional[int] = Field(default=UNSET, alias="purchaseOrderStartingNumber")
    purchase_order_title_en: str = Field(alias="purchaseOrderTitleEN")
    quotation_title_en: str = Field(alias="quotationTitleEN")
    billing_note_title_en: str = Field(alias="billingNoteTitleEN")
    invoice_title_en: str = Field(alias="invoiceTitleEN")
    receipt_title_en: str = Field(alias="receiptTitleEN")
    payment_slip_title_en: str = Field(alias="paymentSlipTitleEN")
    purchase_order_title_th: str = Field(alias="purchaseOrderTitleTH")
    quotation_title_th: str = Field(alias="quotationTitleTH")
    billing_note_title_th: str = Field(alias="billingNoteTitleTH")
    invoice_title_th: str = Field(alias="invoiceTitleTH")
    receipt_title_th: str = Field(alias="receiptTitleTH")
    payment_slip_title_th: str = Field(alias="paymentSlipTitleTH")
    business_type: Optional[BusinessTypeOrInt] = Field(default=UNSET, alias="businessType")
    """1 = SellingProducts 3 = SellingServices 5 = SellingBoth 7 = Custom"""

    terms_agreement: OptionalNullable[str] = Field(default=UNSET, alias="termsAgreement")
    default_remarks: OptionalNullable[str] = Field(default=UNSET, alias="defaultRemarks")
    invoice_starting_number: Optional[int] = Field(default=UNSET, alias="invoiceStartingNumber")
    cash_invoice_title_en: str = Field(alias="cashInvoiceTitleEN")
    cash_invoice_title_th: str = Field(alias="cashInvoiceTitleTH")
    receivable_invoice_title_th: str = Field(alias="receivableInvoiceTitleTH")
    receivable_invoice_title_en: str = Field(alias="receivableInvoiceTitleEN")
    running_number_type: Optional[RunningNumberTypeOrInt] = Field(default=UNSET, alias="runningNumberType")
    """1 = Default 3 = YearMonth 5 = Month 7 = Year 9 = FreeHand"""

    purchase_order_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="purchaseOrderStartingYear")
    quotation_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="quotationStartingYear")
    billing_note_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="billingNoteStartingYear")
    invoice_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="invoiceStartingYear")
    cash_invoice_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="cashInvoiceStartingYear")
    receipt_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="receiptStartingYear")
    purchase_order_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="purchaseOrderStartingMonth")
    quotation_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="quotationStartingMonth")
    billing_note_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="billingNoteStartingMonth")
    invoice_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="invoiceStartingMonth")
    cash_invoice_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="cashInvoiceStartingMonth")
    receipt_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="receiptStartingMonth")
    settings_initiated: bool = Field(default=False, alias="settingsInitiated")
    running_number_settings_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="runningNumberSettingsModifiedOn"
    )
    with_holding_tax_prefix: str = Field(alias="withHoldingTaxPrefix")
    with_holding_tax_starting_number: Optional[int] = Field(default=UNSET, alias="withHoldingTaxStartingNumber")
    with_holding_tax_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="withHoldingTaxStartingMonth")
    with_holding_tax_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="withHoldingTaxStartingYear")
    document_templates: Optional[DocumentTemplatesOrInt] = Field(default=UNSET, alias="documentTemplates")
    """1 = Default 3 = Template1 5 = Template2 7 = Template3 9 = Template4 11 = Template5 13 = TemplateA5 15 =
    Template9x11withOriginal 17 = Template8 101 = NativeDefault 103 = Native1 105 = Native3 107 = Native5 109 = Native7
    111 = Native9 113 = Native11 115 = Native13 201 = Thermal1 203 = Thermal2 205 = SocialSlip 301 = ShortCA1 303 =
    ShortCA2 305 = ShortCA3"""

    print_color: bool = Field(default=True, alias="printColor")
    template_font: Optional[TemplateFontOrInt] = Field(default=UNSET, alias="templateFont")
    """1 = ChatThai 3 = Rsu"""

    print_one_invoice: bool = Field(default=False, alias="printOneInvoice")
    remarks: OptionalNullable[str] = UNSET
    email_message_template: OptionalNullable[str] = Field(default=UNSET, alias="emailMessageTemplate")
    purchase_prefix: str = Field(alias="purchasePrefix")
    purchase_starting_number: Optional[int] = Field(default=UNSET, alias="purchaseStartingNumber")
    purchase_title_en: str = Field(alias="purchaseTitleEN")
    purchase_title_th: str = Field(alias="purchaseTitleTH")
    purchase_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="purchaseStartingYear")
    purchase_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="purchaseStartingMonth")
    adjust_inventory_prefix: str = Field(alias="adjustInventoryPrefix")
    adjust_inventory_starting_number: Optional[int] = Field(default=UNSET, alias="adjustInventoryStartingNumber")
    adjust_inventory_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="adjustInventoryStartingMonth")
    adjust_inventory_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="adjustInventoryStartingYear")
    expense_prefix: str = Field(alias="expensePrefix")
    expense_starting_number: Optional[int] = Field(default=UNSET, alias="expenseStartingNumber")
    expense_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="expenseStartingMonth")
    expense_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="expenseStartingYear")
    payment_slip_prefix: str = Field(alias="paymentSlipPrefix")
    payment_slip_starting_number: Optional[int] = Field(default=UNSET, alias="paymentSlipStartingNumber")
    payment_slip_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="paymentSlipStartingYear")
    payment_slip_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="paymentSlipStartingMonth")
    cash_invoice_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="cashInvoiceRunningNumberModifiedOn"
    )
    purchase_order_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="purchaseOrderRunningNumberModifiedOn"
    )
    quotation_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="quotationRunningNumberModifiedOn"
    )
    billing_note_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="billingNoteRunningNumberModifiedOn"
    )
    invoice_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="invoiceRunningNumberModifiedOn"
    )
    purchase_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="purchaseRunningNumberModifiedOn"
    )
    receivable_invoice_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="receivableInvoiceRunningNumberModifiedOn"
    )
    payment_slip_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="paymentSlipRunningNumberModifiedOn"
    )
    rubber_stamp_url: OptionalNullable[str] = Field(default=UNSET, alias="rubberStampUrl")
    credit_note_prefix: str = Field(alias="creditNotePrefix")
    credit_note_starting_number: Optional[int] = Field(default=UNSET, alias="creditNoteStartingNumber")
    credit_note_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="creditNoteStartingMonth")
    credit_note_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="creditNoteStartingYear")
    credit_note_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="creditNoteRunningNumberModifiedOn"
    )
    credit_note_title_en: str = Field(alias="creditNoteTitleEN")
    credit_note_title_th: str = Field(alias="creditNoteTitleTH")
    debit_note_prefix: str = Field(alias="debitNotePrefix")
    debit_note_starting_number: Optional[int] = Field(default=UNSET, alias="debitNoteStartingNumber")
    debit_note_starting_month: OptionalNullable[int] = Field(default=UNSET, alias="debitNoteStartingMonth")
    debit_note_starting_year: OptionalNullable[int] = Field(default=UNSET, alias="debitNoteStartingYear")
    debit_note_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="debitNoteRunningNumberModifiedOn"
    )
    debit_note_title_en: str = Field(alias="debitNoteTitleEN")
    debit_note_title_th: str = Field(alias="debitNoteTitleTH")
    receipt_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="receiptRunningNumberModifiedOn"
    )
    receivable_invoice_starting_number: Optional[int] = Field(default=UNSET, alias="receivableInvoiceStartingNumber")
    receivable_invoice_starting_month: OptionalNullable[int] = Field(
        default=UNSET, alias="receivableInvoiceStartingMonth"
    )
    receivable_invoice_starting_year: OptionalNullable[int] = Field(
        default=UNSET, alias="receivableInvoiceStartingYear"
    )
    use_partial_receipt: bool = Field(default=False, alias="usePartialReceipt")
    use_cash_invoice: bool = Field(default=False, alias="useCashInvoice")
    use_short_cash_invoice: bool = Field(default=False, alias="useShortCashInvoice")
    general_ledger_running_number_type: Optional[RunningNumberTypeOrInt] = Field(
        default=UNSET, alias="generalLedgerRunningNumberType"
    )
    """1 = Default 3 = YearMonth 5 = Month 7 = Year 9 = FreeHand"""

    journal_voucher_prefix: str = Field(alias="journalVoucherPrefix")
    purchase_voucher_prefix: str = Field(alias="purchaseVoucherPrefix")
    purchase_voucher_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="purchaseVoucherRunningNumberModifiedOn"
    )
    sales_voucher_prefix: str = Field(alias="salesVoucherPrefix")
    sales_voucher_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="salesVoucherRunningNumberModifiedOn"
    )
    payment_voucher_prefix: str = Field(alias="paymentVoucherPrefix")
    payment_voucher_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="paymentVoucherRunningNumberModifiedOn"
    )
    received_voucher_prefix: str = Field(alias="receivedVoucherPrefix")
    received_voucher_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="receivedVoucherRunningNumberModifiedOn"
    )
    conversion_balance_prefix: str = Field(alias="conversionBalancePrefix")
    conversion_balance_running_number_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="conversionBalanceRunningNumberModifiedOn"
    )
    e_tax_email: OptionalNullable[str] = Field(default=UNSET, alias="eTaxEmail")
    short_cash_invoice_templates: Optional[DocumentTemplatesOrInt] = Field(
        default=UNSET, alias="shortCashInvoiceTemplates"
    )
    """1 = Default 3 = Template1 5 = Template2 7 = Template3 9 = Template4 11 = Template5 13 = TemplateA5 15 =
    Template9x11withOriginal 17 = Template8 101 = NativeDefault 103 = Native1 105 = Native3 107 = Native5 109 = Native7
    111 = Native9 113 = Native11 115 = Native13 201 = Thermal1 203 = Thermal2 205 = SocialSlip 301 = ShortCA1 303 =
    ShortCA2 305 = ShortCA3"""

    use_billing_note_accounting_rule: Optional[bool] = Field(default=UNSET, alias="useBillingNoteAccountingRule")
    billing_note_accounting_rule_modified_on: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="billingNoteAccountingRuleModifiedOn"
    )
    template_font_size: OptionalNullable[float] = Field(default=UNSET, alias="templateFontSize")
    use_multi_currency: bool = Field(default=False, alias="useMultiCurrency")
    expense_title_th: OptionalNullable[str] = Field(default=UNSET, alias="expenseTitleTH")
    expense_title_en: OptionalNullable[str] = Field(default=UNSET, alias="expenseTitleEN")
    with_holding_tax_title_th: OptionalNullable[str] = Field(default=UNSET, alias="withHoldingTaxTitleTH")
    with_holding_tax_title_en: OptionalNullable[str] = Field(default=UNSET, alias="withHoldingTaxTitleEN")


class CompanyPreferencesDict(TypedDict):
    company_id: NotRequired[int]
    show_with_holding: NotRequired[bool]
    invoice_prefix: str
    quotation_prefix: str
    billing_note_prefix: str
    receipt_prefix: str
    purchase_order_prefix: str
    cash_invoice_prefix: str
    receivable_invoice_prefix: str
    cash_invoice_starting_number: NotRequired[int]
    receipt_starting_number: NotRequired[int]
    quotation_starting_number: NotRequired[int]
    billing_note_starting_number: NotRequired[int]
    purchase_order_starting_number: NotRequired[int]
    purchase_order_title_en: str
    quotation_title_en: str
    billing_note_title_en: str
    invoice_title_en: str
    receipt_title_en: str
    payment_slip_title_en: str
    purchase_order_title_th: str
    quotation_title_th: str
    billing_note_title_th: str
    invoice_title_th: str
    receipt_title_th: str
    payment_slip_title_th: str
    business_type: NotRequired[BusinessTypeOrInt]
    terms_agreement: NotRequired[str | None]
    default_remarks: NotRequired[str | None]
    invoice_starting_number: NotRequired[int]
    cash_invoice_title_en: str
    cash_invoice_title_th: str
    receivable_invoice_title_th: str
    receivable_invoice_title_en: str
    running_number_type: NotRequired[RunningNumberTypeOrInt]
    purchase_order_starting_year: NotRequired[int | None]
    quotation_starting_year: NotRequired[int | None]
    billing_note_starting_year: NotRequired[int | None]
    invoice_starting_year: NotRequired[int | None]
    cash_invoice_starting_year: NotRequired[int | None]
    receipt_starting_year: NotRequired[int | None]
    purchase_order_starting_month: NotRequired[int | None]
    quotation_starting_month: NotRequired[int | None]
    billing_note_starting_month: NotRequired[int | None]
    invoice_starting_month: NotRequired[int | None]
    cash_invoice_starting_month: NotRequired[int | None]
    receipt_starting_month: NotRequired[int | None]
    settings_initiated: NotRequired[bool]
    running_number_settings_modified_on: NotRequired[RFC3339DateTime | None]
    with_holding_tax_prefix: str
    with_holding_tax_starting_number: NotRequired[int]
    with_holding_tax_starting_month: NotRequired[int | None]
    with_holding_tax_starting_year: NotRequired[int | None]
    document_templates: NotRequired[DocumentTemplatesOrInt]
    print_color: NotRequired[bool]
    template_font: NotRequired[TemplateFontOrInt]
    print_one_invoice: NotRequired[bool]
    remarks: NotRequired[str | None]
    email_message_template: NotRequired[str | None]
    purchase_prefix: str
    purchase_starting_number: NotRequired[int]
    purchase_title_en: str
    purchase_title_th: str
    purchase_starting_year: NotRequired[int | None]
    purchase_starting_month: NotRequired[int | None]
    adjust_inventory_prefix: str
    adjust_inventory_starting_number: NotRequired[int]
    adjust_inventory_starting_month: NotRequired[int | None]
    adjust_inventory_starting_year: NotRequired[int | None]
    expense_prefix: str
    expense_starting_number: NotRequired[int]
    expense_starting_month: NotRequired[int | None]
    expense_starting_year: NotRequired[int | None]
    payment_slip_prefix: str
    payment_slip_starting_number: NotRequired[int]
    payment_slip_starting_year: NotRequired[int | None]
    payment_slip_starting_month: NotRequired[int | None]
    cash_invoice_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    purchase_order_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    quotation_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    billing_note_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    invoice_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    purchase_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    receivable_invoice_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    payment_slip_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    rubber_stamp_url: NotRequired[str | None]
    credit_note_prefix: str
    credit_note_starting_number: NotRequired[int]
    credit_note_starting_month: NotRequired[int | None]
    credit_note_starting_year: NotRequired[int | None]
    credit_note_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    credit_note_title_en: str
    credit_note_title_th: str
    debit_note_prefix: str
    debit_note_starting_number: NotRequired[int]
    debit_note_starting_month: NotRequired[int | None]
    debit_note_starting_year: NotRequired[int | None]
    debit_note_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    debit_note_title_en: str
    debit_note_title_th: str
    receipt_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    receivable_invoice_starting_number: NotRequired[int]
    receivable_invoice_starting_month: NotRequired[int | None]
    receivable_invoice_starting_year: NotRequired[int | None]
    use_partial_receipt: NotRequired[bool]
    use_cash_invoice: NotRequired[bool]
    use_short_cash_invoice: NotRequired[bool]
    general_ledger_running_number_type: NotRequired[RunningNumberTypeOrInt]
    journal_voucher_prefix: str
    purchase_voucher_prefix: str
    purchase_voucher_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    sales_voucher_prefix: str
    sales_voucher_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    payment_voucher_prefix: str
    payment_voucher_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    received_voucher_prefix: str
    received_voucher_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    conversion_balance_prefix: str
    conversion_balance_running_number_modified_on: NotRequired[RFC3339DateTime | None]
    e_tax_email: NotRequired[str | None]
    short_cash_invoice_templates: NotRequired[DocumentTemplatesOrInt]
    use_billing_note_accounting_rule: NotRequired[bool]
    billing_note_accounting_rule_modified_on: NotRequired[RFC3339DateTime | None]
    template_font_size: NotRequired[float | None]
    use_multi_currency: NotRequired[bool]
    expense_title_th: NotRequired[str | None]
    expense_title_en: NotRequired[str | None]
    with_holding_tax_title_th: NotRequired[str | None]
    with_holding_tax_title_en: NotRequired[str | None]
