from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.attachments import Attachments
from .apis.authentication import Authentication
from .apis.bill_approvals import BillApprovals
from .apis.bills import Bills
from .apis.budgets import Budgets
from .apis.cards import Cards
from .apis.classifications_api import ClassificationsApi
from .apis.credit_memos import CreditMemos
from .apis.custom_fields import CustomFields
from .apis.customers import Customers
from .apis.documents import Documents
from .apis.events import Events
from .apis.exports import Exports
from .apis.funding_accounts import FundingAccounts
from .apis.health import Health
from .apis.invoices import Invoices
from .apis.mfa import Mfa
from .apis.network_api import NetworkApi
from .apis.organization_users import OrganizationUsers
from .apis.organizations import Organizations
from .apis.partner import Partner
from .apis.payment_terms import PaymentTerms
from .apis.payments import Payments
from .apis.receivable_payments import ReceivablePayments
from .apis.recurring_invoices import RecurringInvoices
from .apis.recurringbills import Recurringbills
from .apis.reimbursements import Reimbursements
from .apis.reports import Reports
from .apis.risk_verifications import RiskVerifications
from .apis.roles import Roles
from .apis.subscriptions import Subscriptions
from .apis.transactions import Transactions
from .apis.users import Users
from .apis.vendor_credits import VendorCredits
from .apis.vendors import Vendors
from .base_client import DEFAULT_TIMEOUT, BaseBillClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    param,
)
from .server.server_config import ServerConfigOrDict


class BillClient(BaseBillClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "BillClient/1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )

    @cached_property
    def attachments(self) -> Attachments:
        return Attachments(self._raw_client, self._server)

    @cached_property
    def authentication(self) -> Authentication:
        return Authentication(self._raw_client, self._server)

    @cached_property
    def bills(self) -> Bills:
        return Bills(self._raw_client, self._server)

    @cached_property
    def budgets(self) -> Budgets:
        return Budgets(self._raw_client, self._server)

    @cached_property
    def cards(self) -> Cards:
        return Cards(self._raw_client, self._server)

    @cached_property
    def classifications_api(self) -> ClassificationsApi:
        return ClassificationsApi(self._raw_client, self._server)

    @cached_property
    def custom_fields(self) -> CustomFields:
        return CustomFields(self._raw_client, self._server)

    @cached_property
    def customers(self) -> Customers:
        return Customers(self._raw_client, self._server)

    @cached_property
    def documents(self) -> Documents:
        return Documents(self._raw_client, self._server)

    @cached_property
    def events(self) -> Events:
        return Events(self._raw_client, self._server)

    @cached_property
    def exports(self) -> Exports:
        return Exports(self._raw_client, self._server)

    @cached_property
    def health(self) -> Health:
        return Health(self._raw_client, self._server)

    @cached_property
    def invoices(self) -> Invoices:
        return Invoices(self._raw_client, self._server)

    @cached_property
    def mfa(self) -> Mfa:
        return Mfa(self._raw_client, self._server)

    @cached_property
    def network_api(self) -> NetworkApi:
        return NetworkApi(self._raw_client, self._server)

    @cached_property
    def organizations(self) -> Organizations:
        return Organizations(self._raw_client, self._server)

    @cached_property
    def partner(self) -> Partner:
        return Partner(self._raw_client, self._server)

    @cached_property
    def payments(self) -> Payments:
        return Payments(self._raw_client, self._server)

    @cached_property
    def reports(self) -> Reports:
        return Reports(self._raw_client, self._server)

    @cached_property
    def roles(self) -> Roles:
        return Roles(self._raw_client, self._server)

    @cached_property
    def subscriptions(self) -> Subscriptions:
        return Subscriptions(self._raw_client, self._server)

    @cached_property
    def transactions(self) -> Transactions:
        return Transactions(self._raw_client, self._server)

    @cached_property
    def users(self) -> Users:
        return Users(self._raw_client, self._server)

    @cached_property
    def vendor_credits(self) -> VendorCredits:
        return VendorCredits(self._raw_client, self._server)

    @cached_property
    def vendors(self) -> Vendors:
        return Vendors(self._raw_client, self._server)

    @cached_property
    def bill_approvals(self) -> BillApprovals:
        return BillApprovals(self._raw_client, self._server)

    @cached_property
    def credit_memos(self) -> CreditMemos:
        return CreditMemos(self._raw_client, self._server)

    @cached_property
    def funding_accounts(self) -> FundingAccounts:
        return FundingAccounts(self._raw_client, self._server)

    @cached_property
    def organization_users(self) -> OrganizationUsers:
        return OrganizationUsers(self._raw_client, self._server)

    @cached_property
    def payment_terms(self) -> PaymentTerms:
        return PaymentTerms(self._raw_client, self._server)

    @cached_property
    def receivable_payments(self) -> ReceivablePayments:
        return ReceivablePayments(self._raw_client, self._server)

    @cached_property
    def recurring_invoices(self) -> RecurringInvoices:
        return RecurringInvoices(self._raw_client, self._server)

    @cached_property
    def recurringbills(self) -> Recurringbills:
        return Recurringbills(self._raw_client, self._server)

    @cached_property
    def reimbursements(self) -> Reimbursements:
        return Reimbursements(self._raw_client, self._server)

    @cached_property
    def risk_verifications(self) -> RiskVerifications:
        return RiskVerifications(self._raw_client, self._server)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = BillClient
