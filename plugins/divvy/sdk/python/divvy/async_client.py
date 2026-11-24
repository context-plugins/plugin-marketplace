from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.attachments import AsyncAttachments
from .apis.authentication import AsyncAuthentication
from .apis.bill_approvals import AsyncBillApprovals
from .apis.bills import AsyncBills
from .apis.budgets import AsyncBudgets
from .apis.cards import AsyncCards
from .apis.classifications_api import AsyncClassificationsApi
from .apis.credit_memos import AsyncCreditMemos
from .apis.custom_fields import AsyncCustomFields
from .apis.customers import AsyncCustomers
from .apis.documents import AsyncDocuments
from .apis.events import AsyncEvents
from .apis.exports import AsyncExports
from .apis.funding_accounts import AsyncFundingAccounts
from .apis.health import AsyncHealth
from .apis.invoices import AsyncInvoices
from .apis.mfa import AsyncMfa
from .apis.network_api import AsyncNetworkApi
from .apis.organization_users import AsyncOrganizationUsers
from .apis.organizations import AsyncOrganizations
from .apis.partner import AsyncPartner
from .apis.payment_terms import AsyncPaymentTerms
from .apis.payments import AsyncPayments
from .apis.receivable_payments import AsyncReceivablePayments
from .apis.recurring_invoices import AsyncRecurringInvoices
from .apis.recurringbills import AsyncRecurringbills
from .apis.reimbursements import AsyncReimbursements
from .apis.reports import AsyncReports
from .apis.risk_verifications import AsyncRiskVerifications
from .apis.roles import AsyncRoles
from .apis.subscriptions import AsyncSubscriptions
from .apis.transactions import AsyncTransactions
from .apis.users import AsyncUsers
from .apis.vendor_credits import AsyncVendorCredits
from .apis.vendors import AsyncVendors
from .base_client import DEFAULT_TIMEOUT, BaseDivvyClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    param,
)
from .server.server_config import ServerConfigOrDict


class AsyncDivvyClient(BaseDivvyClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "DivvyClient/1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )

    @cached_property
    def attachments(self) -> AsyncAttachments:
        return AsyncAttachments(self._raw_client, self._server)

    @cached_property
    def authentication(self) -> AsyncAuthentication:
        return AsyncAuthentication(self._raw_client, self._server)

    @cached_property
    def bills(self) -> AsyncBills:
        return AsyncBills(self._raw_client, self._server)

    @cached_property
    def budgets(self) -> AsyncBudgets:
        return AsyncBudgets(self._raw_client, self._server)

    @cached_property
    def cards(self) -> AsyncCards:
        return AsyncCards(self._raw_client, self._server)

    @cached_property
    def classifications_api(self) -> AsyncClassificationsApi:
        return AsyncClassificationsApi(self._raw_client, self._server)

    @cached_property
    def custom_fields(self) -> AsyncCustomFields:
        return AsyncCustomFields(self._raw_client, self._server)

    @cached_property
    def customers(self) -> AsyncCustomers:
        return AsyncCustomers(self._raw_client, self._server)

    @cached_property
    def documents(self) -> AsyncDocuments:
        return AsyncDocuments(self._raw_client, self._server)

    @cached_property
    def events(self) -> AsyncEvents:
        return AsyncEvents(self._raw_client, self._server)

    @cached_property
    def exports(self) -> AsyncExports:
        return AsyncExports(self._raw_client, self._server)

    @cached_property
    def health(self) -> AsyncHealth:
        return AsyncHealth(self._raw_client, self._server)

    @cached_property
    def invoices(self) -> AsyncInvoices:
        return AsyncInvoices(self._raw_client, self._server)

    @cached_property
    def mfa(self) -> AsyncMfa:
        return AsyncMfa(self._raw_client, self._server)

    @cached_property
    def network_api(self) -> AsyncNetworkApi:
        return AsyncNetworkApi(self._raw_client, self._server)

    @cached_property
    def organizations(self) -> AsyncOrganizations:
        return AsyncOrganizations(self._raw_client, self._server)

    @cached_property
    def partner(self) -> AsyncPartner:
        return AsyncPartner(self._raw_client, self._server)

    @cached_property
    def payments(self) -> AsyncPayments:
        return AsyncPayments(self._raw_client, self._server)

    @cached_property
    def reports(self) -> AsyncReports:
        return AsyncReports(self._raw_client, self._server)

    @cached_property
    def roles(self) -> AsyncRoles:
        return AsyncRoles(self._raw_client, self._server)

    @cached_property
    def subscriptions(self) -> AsyncSubscriptions:
        return AsyncSubscriptions(self._raw_client, self._server)

    @cached_property
    def transactions(self) -> AsyncTransactions:
        return AsyncTransactions(self._raw_client, self._server)

    @cached_property
    def users(self) -> AsyncUsers:
        return AsyncUsers(self._raw_client, self._server)

    @cached_property
    def vendor_credits(self) -> AsyncVendorCredits:
        return AsyncVendorCredits(self._raw_client, self._server)

    @cached_property
    def vendors(self) -> AsyncVendors:
        return AsyncVendors(self._raw_client, self._server)

    @cached_property
    def bill_approvals(self) -> AsyncBillApprovals:
        return AsyncBillApprovals(self._raw_client, self._server)

    @cached_property
    def credit_memos(self) -> AsyncCreditMemos:
        return AsyncCreditMemos(self._raw_client, self._server)

    @cached_property
    def funding_accounts(self) -> AsyncFundingAccounts:
        return AsyncFundingAccounts(self._raw_client, self._server)

    @cached_property
    def organization_users(self) -> AsyncOrganizationUsers:
        return AsyncOrganizationUsers(self._raw_client, self._server)

    @cached_property
    def payment_terms(self) -> AsyncPaymentTerms:
        return AsyncPaymentTerms(self._raw_client, self._server)

    @cached_property
    def receivable_payments(self) -> AsyncReceivablePayments:
        return AsyncReceivablePayments(self._raw_client, self._server)

    @cached_property
    def recurring_invoices(self) -> AsyncRecurringInvoices:
        return AsyncRecurringInvoices(self._raw_client, self._server)

    @cached_property
    def recurringbills(self) -> AsyncRecurringbills:
        return AsyncRecurringbills(self._raw_client, self._server)

    @cached_property
    def reimbursements(self) -> AsyncReimbursements:
        return AsyncReimbursements(self._raw_client, self._server)

    @cached_property
    def risk_verifications(self) -> AsyncRiskVerifications:
        return AsyncRiskVerifications(self._raw_client, self._server)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncDivvyClient
