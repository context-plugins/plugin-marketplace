from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReportTypes(int, Enum):
    """10 = Sales 11 = SalesTeamReport 12 = SalesTax 13 = SimpleSales 14 = AccountReceivable 15 = AccountReceivableAging
    20 = Purchase 21 = PurchaseTax 22 = AccountPayable 23 = AccountPayableAging 24 = PurchaseByProduct 25 =
    PurchaseByProductAdvance 30 = Clients 40 = Vendor 50 = PaymentCollection 60 = SalesByProduct 61 =
    SalesByProductAdvance 62 = SalesByPerson 63 = SalesByPersonAdvance 64 = SalesByCustomer 65 = SalesByCustomerAdvance
    70 = Quotation 80 = BillingNote 90 = ReceiveInventory 91 = StocksReport 92 = GroupStockReport 100 = Expense 110 =
    WithHoldingTax 120 = ProfitAndLossOneMonth 121 = ProfitAndLossMultipleMonth 130 = Receipt 140 = CreditNote 150 =
    DebitNote 160 = TaxInvoice 170 = Payroll 171 = PayrollSummary 172 = PayrollGroup 173 = PayrollSscSummary 180 =
    ContactGrid 190 = ProductGrid 200 = ExportContact 210 = ExportProduct 220 = Receivables 240 = Payables 260 =
    GeneralLedger 270 = JournalEntry 280 = Payment 290 = InputTax 291 = OutputTax 292 = FixedAsset 293 = Depreciation
    300 = PaymentSlip"""

    VALUE_10 = 10
    VALUE_11 = 11
    VALUE_12 = 12
    VALUE_13 = 13
    VALUE_14 = 14
    VALUE_15 = 15
    VALUE_20 = 20
    VALUE_21 = 21
    VALUE_22 = 22
    VALUE_23 = 23
    VALUE_24 = 24
    VALUE_25 = 25
    VALUE_30 = 30
    VALUE_40 = 40
    VALUE_50 = 50
    VALUE_60 = 60
    VALUE_61 = 61
    VALUE_62 = 62
    VALUE_63 = 63
    VALUE_64 = 64
    VALUE_65 = 65
    VALUE_70 = 70
    VALUE_80 = 80
    VALUE_90 = 90
    VALUE_91 = 91
    VALUE_92 = 92
    VALUE_100 = 100
    VALUE_110 = 110
    VALUE_120 = 120
    VALUE_121 = 121
    VALUE_130 = 130
    VALUE_140 = 140
    VALUE_150 = 150
    VALUE_160 = 160
    VALUE_170 = 170
    VALUE_171 = 171
    VALUE_172 = 172
    VALUE_173 = 173
    VALUE_180 = 180
    VALUE_190 = 190
    VALUE_200 = 200
    VALUE_210 = 210
    VALUE_220 = 220
    VALUE_240 = 240
    VALUE_260 = 260
    VALUE_270 = 270
    VALUE_280 = 280
    VALUE_290 = 290
    VALUE_291 = 291
    VALUE_292 = 292
    VALUE_293 = 293
    VALUE_300 = 300

    __str__ = str.__str__


ReportTypesOrInt: TypeAlias = Annotated[ReportTypes | int, open_enum_validator(ReportTypes)]
