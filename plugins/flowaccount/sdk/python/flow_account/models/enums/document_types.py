from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DocumentTypes(int, Enum):
    """1 = PurchaseOrder 3 = Quotation 5 = BillingNote 7 = TaxInvoice 9 = Receipt 13 = Expense 15 = Vendor 17 =
    WithHoldingTax 19 = BillingNotePartials 21 = TaxInvoicePartails 23 = Purchase 24 = PurchaseTax 25 =
    ReceivableInvoice 29 = AdjustInventory 31 = CreditNote 33 = DebitNote 35 = CashInvoice 37 = PaymentSlip 51 =
    JournalEntry 53 = PurchaseVoucher 55 = SalesVoucher 57 = PaymentVoucher 59 = ReceivedVoucher 61 = ConversionBalance
    63 = Transaction 65 = SupplierInvoice 67 = BatchTaxFiling 69 = FixedAsset 71 = Depreciation 73 = BankTransfer 151 =
    DraftJournalEntry 153 = DraftPurchaseVoucher 155 = DraftSalesVoucher 157 = DraftPaymentVoucher 159 =
    DraftReceivedVoucher 201 = Payroll 202 = PayrollDetail 203 = Employee 204 = PayrollPayment"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_13 = 13
    VALUE_15 = 15
    VALUE_17 = 17
    VALUE_19 = 19
    VALUE_21 = 21
    VALUE_23 = 23
    VALUE_24 = 24
    VALUE_25 = 25
    VALUE_29 = 29
    VALUE_31 = 31
    VALUE_33 = 33
    VALUE_35 = 35
    VALUE_37 = 37
    VALUE_51 = 51
    VALUE_53 = 53
    VALUE_55 = 55
    VALUE_57 = 57
    VALUE_59 = 59
    VALUE_61 = 61
    VALUE_63 = 63
    VALUE_65 = 65
    VALUE_67 = 67
    VALUE_69 = 69
    VALUE_71 = 71
    VALUE_73 = 73
    VALUE_151 = 151
    VALUE_153 = 153
    VALUE_155 = 155
    VALUE_157 = 157
    VALUE_159 = 159
    VALUE_201 = 201
    VALUE_202 = 202
    VALUE_203 = 203
    VALUE_204 = 204

    __str__ = str.__str__


DocumentTypesOrInt: TypeAlias = Annotated[DocumentTypes | int, open_enum_validator(DocumentTypes)]
