from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.batch_import import BatchImport
from .apis.billing_note import BillingNote
from .apis.cash_invoice import CashInvoice
from .apis.company_currency import CompanyCurrency
from .apis.contact_api import ContactApi
from .apis.credit_note import CreditNote
from .apis.debit_note import DebitNote
from .apis.employee_api import EmployeeApi
from .apis.expense import Expense
from .apis.product_category_api import ProductCategoryApi
from .apis.product_inventory import ProductInventory
from .apis.product_unit_api import ProductUnitApi
from .apis.products import Products
from .apis.purchase import Purchase
from .apis.purchase_order import PurchaseOrder
from .apis.quotation import Quotation
from .apis.receipt import Receipt
from .apis.receivable_invoice_api import ReceivableInvoiceApi
from .apis.tax_invoice import TaxInvoice
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseFlowAccountClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    BearerAuthScheme,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    no_auth,
    param,
)
from .server.environment import Environment


class FlowAccountClient(BaseFlowAccountClient[RawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            base_url=base_url,
            timeout=timeout,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "FlowAccountClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer=BearerAuthScheme(bearer) if bearer is not None else no_auth)

    @cached_property
    def batch_import(self) -> BatchImport:
        return BatchImport(self._raw_client, self._server, self._auth)

    @cached_property
    def billing_note(self) -> BillingNote:
        return BillingNote(self._raw_client, self._server, self._auth)

    @cached_property
    def cash_invoice(self) -> CashInvoice:
        return CashInvoice(self._raw_client, self._server, self._auth)

    @cached_property
    def company_currency(self) -> CompanyCurrency:
        return CompanyCurrency(self._raw_client, self._server, self._auth)

    @cached_property
    def contact_api(self) -> ContactApi:
        return ContactApi(self._raw_client, self._server, self._auth)

    @cached_property
    def credit_note(self) -> CreditNote:
        return CreditNote(self._raw_client, self._server, self._auth)

    @cached_property
    def debit_note(self) -> DebitNote:
        return DebitNote(self._raw_client, self._server, self._auth)

    @cached_property
    def employee_api(self) -> EmployeeApi:
        return EmployeeApi(self._raw_client, self._server, self._auth)

    @cached_property
    def expense(self) -> Expense:
        return Expense(self._raw_client, self._server, self._auth)

    @cached_property
    def product_category_api(self) -> ProductCategoryApi:
        return ProductCategoryApi(self._raw_client, self._server, self._auth)

    @cached_property
    def product_inventory(self) -> ProductInventory:
        return ProductInventory(self._raw_client, self._server, self._auth)

    @cached_property
    def product_unit_api(self) -> ProductUnitApi:
        return ProductUnitApi(self._raw_client, self._server, self._auth)

    @cached_property
    def products(self) -> Products:
        return Products(self._raw_client, self._server, self._auth)

    @cached_property
    def purchase(self) -> Purchase:
        return Purchase(self._raw_client, self._server, self._auth)

    @cached_property
    def purchase_order(self) -> PurchaseOrder:
        return PurchaseOrder(self._raw_client, self._server, self._auth)

    @cached_property
    def quotation(self) -> Quotation:
        return Quotation(self._raw_client, self._server, self._auth)

    @cached_property
    def receipt(self) -> Receipt:
        return Receipt(self._raw_client, self._server, self._auth)

    @cached_property
    def receivable_invoice_api(self) -> ReceivableInvoiceApi:
        return ReceivableInvoiceApi(self._raw_client, self._server, self._auth)

    @cached_property
    def tax_invoice(self) -> TaxInvoice:
        return TaxInvoice(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = FlowAccountClient
