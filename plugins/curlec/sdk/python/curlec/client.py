from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.bills import Bills
from .apis.customers import Customers
from .apis.disputes import Disputes
from .apis.documents import Documents
from .apis.instant_settlements import InstantSettlements
from .apis.invoices import Invoices
from .apis.items import Items
from .apis.linked_accounts import LinkedAccounts
from .apis.orders import Orders
from .apis.partner_accounts import PartnerAccounts
from .apis.partner_documents import PartnerDocuments
from .apis.partner_stakeholders import PartnerStakeholders
from .apis.partner_webhooks import PartnerWebhooks
from .apis.payment_downtimes import PaymentDowntimes
from .apis.payment_links import PaymentLinks
from .apis.payments import Payments
from .apis.plans import Plans
from .apis.qr_codes import QrCodes
from .apis.refunds import Refunds
from .apis.settlements_api import SettlementsApi
from .apis.subscriptions import Subscriptions
from .apis.transfers import Transfers
from .apis.virtual_accounts import VirtualAccounts
from .apis.x_account_validation import XAccountValidation
from .apis.x_banking_balances import XBankingBalances
from .apis.x_contacts import XContacts
from .apis.x_fund_accounts import XFundAccounts
from .apis.x_payout_links import XPayoutLinks
from .apis.x_payouts import XPayouts
from .apis.x_transactions import XTransactions
from .auth import AuthSchemes, Oauth2AuthorizationCodeScope, Oauth2ClientCredentialsScope
from .base_client import DEFAULT_TIMEOUT, BaseCurlecClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AuthorizationCodeCredentials,
    AuthorizationCodeCredentialsOrDict,
    AuthorizationCodeTokenSource,
    BasicAuthCredentials,
    BasicAuthCredentialsOrDict,
    BasicAuthScheme,
    ClientCredentials,
    ClientCredentialsOrDict,
    ClientCredentialsTokenSource,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    OAuth2RefreshableScheme,
    OAuth2Scheme,
    RawClient,
    RefreshableTokenSource,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    TokenSource,
    client_secret_basic,
    no_auth,
    param,
)
from .server.server_config import ServerConfigOrDict


class CurlecClient(BaseCurlecClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        basic_auth: BasicAuthCredentialsOrDict | None = None,
        oauth2_authorization_code: AuthorizationCodeCredentialsOrDict[Oauth2AuthorizationCodeScope] | None = None,
        oauth2_authorization_code_token_source: (
            RefreshableTokenSource[AuthorizationCodeCredentials[Oauth2AuthorizationCodeScope]] | None
        ) = None,
        oauth2_client_credentials: ClientCredentialsOrDict[Oauth2ClientCredentialsScope] | None = None,
        oauth2_client_credentials_token_source: (
            TokenSource[ClientCredentials[Oauth2ClientCredentialsScope]] | None
        ) = None,
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
                param[str]("User-Agent", "CurlecClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            basic_auth=BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth)) if basic_auth is not None else no_auth,
            oauth2_authorization_code=(
                OAuth2RefreshableScheme(
                    credentials=AuthorizationCodeCredentials[Oauth2AuthorizationCodeScope].coerce(
                        oauth2_authorization_code
                    ),
                    source=(
                        oauth2_authorization_code_token_source
                        if oauth2_authorization_code_token_source is not None
                        else AuthorizationCodeTokenSource[Oauth2AuthorizationCodeScope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/authorize"),
                            token_url=self._server.auth_server("/token"),
                            refresh_url=self._server.auth_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2_authorization_code is not None
                else no_auth
            ),
            oauth2_client_credentials=(
                OAuth2Scheme(
                    credentials=ClientCredentials[Oauth2ClientCredentialsScope].coerce(oauth2_client_credentials),
                    source=(
                        oauth2_client_credentials_token_source
                        if oauth2_client_credentials_token_source is not None
                        else ClientCredentialsTokenSource[Oauth2ClientCredentialsScope](
                            client=self._raw_client,
                            token_url=self._server.auth_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2_client_credentials is not None
                else no_auth
            ),
        )

    @cached_property
    def bills(self) -> Bills:
        return Bills(self._raw_client, self._server, self._auth)

    @cached_property
    def customers(self) -> Customers:
        return Customers(self._raw_client, self._server, self._auth)

    @cached_property
    def disputes(self) -> Disputes:
        return Disputes(self._raw_client, self._server, self._auth)

    @cached_property
    def documents(self) -> Documents:
        return Documents(self._raw_client, self._server, self._auth)

    @cached_property
    def instant_settlements(self) -> InstantSettlements:
        return InstantSettlements(self._raw_client, self._server, self._auth)

    @cached_property
    def invoices(self) -> Invoices:
        return Invoices(self._raw_client, self._server, self._auth)

    @cached_property
    def items(self) -> Items:
        return Items(self._raw_client, self._server, self._auth)

    @cached_property
    def linked_accounts(self) -> LinkedAccounts:
        return LinkedAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def orders(self) -> Orders:
        return Orders(self._raw_client, self._server, self._auth)

    @cached_property
    def partner_accounts(self) -> PartnerAccounts:
        return PartnerAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def partner_documents(self) -> PartnerDocuments:
        return PartnerDocuments(self._raw_client, self._server, self._auth)

    @cached_property
    def partner_stakeholders(self) -> PartnerStakeholders:
        return PartnerStakeholders(self._raw_client, self._server, self._auth)

    @cached_property
    def partner_webhooks(self) -> PartnerWebhooks:
        return PartnerWebhooks(self._raw_client, self._server, self._auth)

    @cached_property
    def payment_downtimes(self) -> PaymentDowntimes:
        return PaymentDowntimes(self._raw_client, self._server, self._auth)

    @cached_property
    def payment_links(self) -> PaymentLinks:
        return PaymentLinks(self._raw_client, self._server, self._auth)

    @cached_property
    def payments(self) -> Payments:
        return Payments(self._raw_client, self._server, self._auth)

    @cached_property
    def plans(self) -> Plans:
        return Plans(self._raw_client, self._server, self._auth)

    @cached_property
    def qr_codes(self) -> QrCodes:
        return QrCodes(self._raw_client, self._server, self._auth)

    @cached_property
    def refunds(self) -> Refunds:
        return Refunds(self._raw_client, self._server, self._auth)

    @cached_property
    def settlements_api(self) -> SettlementsApi:
        return SettlementsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def subscriptions(self) -> Subscriptions:
        return Subscriptions(self._raw_client, self._server, self._auth)

    @cached_property
    def transfers(self) -> Transfers:
        return Transfers(self._raw_client, self._server, self._auth)

    @cached_property
    def virtual_accounts(self) -> VirtualAccounts:
        return VirtualAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def x_account_validation(self) -> XAccountValidation:
        return XAccountValidation(self._raw_client, self._server, self._auth)

    @cached_property
    def x_banking_balances(self) -> XBankingBalances:
        return XBankingBalances(self._raw_client, self._server, self._auth)

    @cached_property
    def x_contacts(self) -> XContacts:
        return XContacts(self._raw_client, self._server, self._auth)

    @cached_property
    def x_fund_accounts(self) -> XFundAccounts:
        return XFundAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def x_payout_links(self) -> XPayoutLinks:
        return XPayoutLinks(self._raw_client, self._server, self._auth)

    @cached_property
    def x_payouts(self) -> XPayouts:
        return XPayouts(self._raw_client, self._server, self._auth)

    @cached_property
    def x_transactions(self) -> XTransactions:
        return XTransactions(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = CurlecClient
