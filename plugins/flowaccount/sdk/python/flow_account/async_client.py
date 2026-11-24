from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.batch_import import AsyncBatchImport
from .apis.billing_note import AsyncBillingNote
from .apis.cash_invoice import AsyncCashInvoice
from .apis.company_currency import AsyncCompanyCurrency
from .apis.contact_api import AsyncContactApi
from .apis.credit_note import AsyncCreditNote
from .apis.debit_note import AsyncDebitNote
from .apis.employee_api import AsyncEmployeeApi
from .apis.expense import AsyncExpense
from .apis.product_category_api import AsyncProductCategoryApi
from .apis.product_inventory import AsyncProductInventory
from .apis.product_unit_api import AsyncProductUnitApi
from .apis.products import AsyncProducts
from .apis.purchase import AsyncPurchase
from .apis.purchase_order import AsyncPurchaseOrder
from .apis.quotation import AsyncQuotation
from .apis.receipt import AsyncReceipt
from .apis.receivable_invoice_api import AsyncReceivableInvoiceApi
from .apis.tax_invoice import AsyncTaxInvoice
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseFlowAccountClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)
from .server.environment import Environment


class AsyncFlowAccountClient(BaseFlowAccountClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            base_url=base_url,
            timeout=timeout,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
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
        self._auth = AsyncAuthSchemes(bearer=BearerAuthScheme(bearer) if bearer is not None else no_auth)

    @cached_property
    def batch_import(self) -> AsyncBatchImport:
        return AsyncBatchImport(self._raw_client, self._server, self._auth)

    @cached_property
    def billing_note(self) -> AsyncBillingNote:
        return AsyncBillingNote(self._raw_client, self._server, self._auth)

    @cached_property
    def cash_invoice(self) -> AsyncCashInvoice:
        return AsyncCashInvoice(self._raw_client, self._server, self._auth)

    @cached_property
    def company_currency(self) -> AsyncCompanyCurrency:
        return AsyncCompanyCurrency(self._raw_client, self._server, self._auth)

    @cached_property
    def contact_api(self) -> AsyncContactApi:
        return AsyncContactApi(self._raw_client, self._server, self._auth)

    @cached_property
    def credit_note(self) -> AsyncCreditNote:
        return AsyncCreditNote(self._raw_client, self._server, self._auth)

    @cached_property
    def debit_note(self) -> AsyncDebitNote:
        return AsyncDebitNote(self._raw_client, self._server, self._auth)

    @cached_property
    def employee_api(self) -> AsyncEmployeeApi:
        return AsyncEmployeeApi(self._raw_client, self._server, self._auth)

    @cached_property
    def expense(self) -> AsyncExpense:
        return AsyncExpense(self._raw_client, self._server, self._auth)

    @cached_property
    def product_category_api(self) -> AsyncProductCategoryApi:
        return AsyncProductCategoryApi(self._raw_client, self._server, self._auth)

    @cached_property
    def product_inventory(self) -> AsyncProductInventory:
        return AsyncProductInventory(self._raw_client, self._server, self._auth)

    @cached_property
    def product_unit_api(self) -> AsyncProductUnitApi:
        return AsyncProductUnitApi(self._raw_client, self._server, self._auth)

    @cached_property
    def products(self) -> AsyncProducts:
        return AsyncProducts(self._raw_client, self._server, self._auth)

    @cached_property
    def purchase(self) -> AsyncPurchase:
        return AsyncPurchase(self._raw_client, self._server, self._auth)

    @cached_property
    def purchase_order(self) -> AsyncPurchaseOrder:
        return AsyncPurchaseOrder(self._raw_client, self._server, self._auth)

    @cached_property
    def quotation(self) -> AsyncQuotation:
        return AsyncQuotation(self._raw_client, self._server, self._auth)

    @cached_property
    def receipt(self) -> AsyncReceipt:
        return AsyncReceipt(self._raw_client, self._server, self._auth)

    @cached_property
    def receivable_invoice_api(self) -> AsyncReceivableInvoiceApi:
        return AsyncReceivableInvoiceApi(self._raw_client, self._server, self._auth)

    @cached_property
    def tax_invoice(self) -> AsyncTaxInvoice:
        return AsyncTaxInvoice(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncFlowAccountClient
