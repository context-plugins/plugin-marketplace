from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.custom_document_model import CustomDocumentModelOrInt
from .enums.data_range import DataRangeOrInt
from .enums.date_type import DateTypeOrInt
from .enums.document_types import DocumentTypesOrInt
from .enums.report_types import ReportTypesOrInt
from .filter_options import FilterOptions, FilterOptionsDict
from .list_item import ListItem, ListItemDict
from .sort_options import SortOptions, SortOptionsDict


class DocumentQuery(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    page_size: OptionalNullable[int] = Field(default=UNSET, alias="pageSize")
    current_page: OptionalNullable[int] = Field(default=UNSET, alias="currentPage")
    total_records: Optional[int] = Field(default=UNSET, alias="totalRecords")
    date_type: Optional[DateTypeOrInt] = Field(default=UNSET, alias="dateType")
    """1 = PublishDate 3 = PaymentDate 5 = ExpenseDate 7 = TransitionDate"""

    start_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    end_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    day: Optional[int] = UNSET
    month: Optional[int] = UNSET
    year: Optional[int] = UNSET
    range_: Optional[DataRangeOrInt] = Field(default=UNSET, alias="range")
    """1 = CurrentMonth 3 = PreviousMonth 5 = Manual 7 = CurrentYear 9 = PreviousYear 11 = AsAt 13 = Grid 15 =
    FiscalYear 17 = Months 19 = Days"""

    is_first_current: Optional[int] = Field(default=UNSET, alias="isFirstCurrent")
    hash_tags: OptionalNullable[list[str]] = Field(default=UNSET, alias="hashTags")
    report_type: Optional[ReportTypesOrInt] = Field(default=UNSET, alias="reportType")
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

    filter: OptionalNullable[list[FilterOptions]] = UNSET
    sort_by: OptionalNullable[list[SortOptions]] = Field(default=UNSET, alias="sortBy")
    total_value: Optional[float] = Field(default=UNSET, alias="totalValue")
    total_vat: Optional[float] = Field(default=UNSET, alias="totalVAT")
    is_received: Optional[bool] = Field(default=UNSET, alias="isReceived")
    document_type: OptionalNullable[list[DocumentTypesOrInt]] = Field(default=UNSET, alias="documentType")
    revenue: OptionalNullable[list[ListItem]] = UNSET
    expenses: OptionalNullable[list[ListItem]] = UNSET
    previous_months: OptionalNullable[list[ListItem]] = Field(default=UNSET, alias="previousMonths")
    previous_years: OptionalNullable[list[ListItem]] = Field(default=UNSET, alias="previousYears")
    custom_document_models: OptionalNullable[list[CustomDocumentModelOrInt]] = Field(
        default=UNSET, alias="customDocumentModels"
    )


class DocumentQueryDict(TypedDict):
    page_size: NotRequired[int | None]
    current_page: NotRequired[int | None]
    total_records: NotRequired[int]
    date_type: NotRequired[DateTypeOrInt]
    start_date: NotRequired[RFC3339DateTime | None]
    end_date: NotRequired[RFC3339DateTime | None]
    day: NotRequired[int]
    month: NotRequired[int]
    year: NotRequired[int]
    range_: NotRequired[DataRangeOrInt]
    is_first_current: NotRequired[int]
    hash_tags: NotRequired[list[str] | None]
    report_type: NotRequired[ReportTypesOrInt]
    filter: NotRequired[list[FilterOptionsDict] | None]
    sort_by: NotRequired[list[SortOptionsDict] | None]
    total_value: NotRequired[float]
    total_vat: NotRequired[float]
    is_received: NotRequired[bool]
    document_type: NotRequired[list[DocumentTypesOrInt] | None]
    revenue: NotRequired[list[ListItemDict] | None]
    expenses: NotRequired[list[ListItemDict] | None]
    previous_months: NotRequired[list[ListItemDict] | None]
    previous_years: NotRequired[list[ListItemDict] | None]
    custom_document_models: NotRequired[list[CustomDocumentModelOrInt] | None]
