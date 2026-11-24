from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.bills import AsyncBills
from .apis.customers import AsyncCustomers
from .apis.disputes import AsyncDisputes
from .apis.documents import AsyncDocuments
from .apis.instant_settlements import AsyncInstantSettlements
from .apis.invoices import AsyncInvoices
from .apis.items import AsyncItems
from .apis.linked_accounts import AsyncLinkedAccounts
from .apis.orders import AsyncOrders
from .apis.partner_accounts import AsyncPartnerAccounts
from .apis.partner_documents import AsyncPartnerDocuments
from .apis.partner_stakeholders import AsyncPartnerStakeholders
from .apis.partner_webhooks import AsyncPartnerWebhooks
from .apis.payment_downtimes import AsyncPaymentDowntimes
from .apis.payment_links import AsyncPaymentLinks
from .apis.payments import AsyncPayments
from .apis.plans import AsyncPlans
from .apis.qr_codes import AsyncQrCodes
from .apis.refunds import AsyncRefunds
from .apis.settlements_api import AsyncSettlementsApi
from .apis.subscriptions import AsyncSubscriptions
from .apis.transfers import AsyncTransfers
from .apis.virtual_accounts import AsyncVirtualAccounts
from .apis.x_account_validation import AsyncXAccountValidation
from .apis.x_banking_balances import AsyncXBankingBalances
from .apis.x_contacts import AsyncXContacts
from .apis.x_fund_accounts import AsyncXFundAccounts
from .apis.x_payout_links import AsyncXPayoutLinks
from .apis.x_payouts import AsyncXPayouts
from .apis.x_transactions import AsyncXTransactions
from .auth import AsyncAuthSchemes, Oauth2AuthorizationCodeScope, Oauth2ClientCredentialsScope
from .base_client import DEFAULT_TIMEOUT, BaseCurlecClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncAuthorizationCodeCredentials,
    AsyncAuthorizationCodeCredentialsOrDict,
    AsyncAuthorizationCodeTokenSource,
    AsyncClientCredentialsTokenSource,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncOAuth2RefreshableScheme,
    AsyncOAuth2Scheme,
    AsyncRawClient,
    AsyncRefreshableTokenSource,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    AsyncTokenSource,
    BasicAuthCredentials,
    BasicAuthCredentialsOrDict,
    BasicAuthScheme,
    ClientCredentials,
    ClientCredentialsOrDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    client_secret_basic,
    no_auth,
    param,
)
from .server.server_config import ServerConfigOrDict


class AsyncCurlecClient(BaseCurlecClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        basic_auth: BasicAuthCredentialsOrDict | None = None,
        oauth2_authorization_code: AsyncAuthorizationCodeCredentialsOrDict[Oauth2AuthorizationCodeScope] | None = None,
        oauth2_authorization_code_token_source: (
            AsyncRefreshableTokenSource[AsyncAuthorizationCodeCredentials[Oauth2AuthorizationCodeScope]] | None
        ) = None,
        oauth2_client_credentials: ClientCredentialsOrDict[Oauth2ClientCredentialsScope] | None = None,
        oauth2_client_credentials_token_source: (
            AsyncTokenSource[ClientCredentials[Oauth2ClientCredentialsScope]] | None
        ) = None,
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
                param[str]("User-Agent", "CurlecClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            basic_auth=BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth)) if basic_auth is not None else no_auth,
            oauth2_authorization_code=(
                AsyncOAuth2RefreshableScheme(
                    credentials=AsyncAuthorizationCodeCredentials[Oauth2AuthorizationCodeScope].coerce(
                        oauth2_authorization_code
                    ),
                    source=(
                        oauth2_authorization_code_token_source
                        if oauth2_authorization_code_token_source is not None
                        else AsyncAuthorizationCodeTokenSource[Oauth2AuthorizationCodeScope](
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
                AsyncOAuth2Scheme(
                    credentials=ClientCredentials[Oauth2ClientCredentialsScope].coerce(oauth2_client_credentials),
                    source=(
                        oauth2_client_credentials_token_source
                        if oauth2_client_credentials_token_source is not None
                        else AsyncClientCredentialsTokenSource[Oauth2ClientCredentialsScope](
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
    def bills(self) -> AsyncBills:
        return AsyncBills(self._raw_client, self._server, self._auth)

    @cached_property
    def customers(self) -> AsyncCustomers:
        return AsyncCustomers(self._raw_client, self._server, self._auth)

    @cached_property
    def disputes(self) -> AsyncDisputes:
        return AsyncDisputes(self._raw_client, self._server, self._auth)

    @cached_property
    def documents(self) -> AsyncDocuments:
        return AsyncDocuments(self._raw_client, self._server, self._auth)

    @cached_property
    def instant_settlements(self) -> AsyncInstantSettlements:
        return AsyncInstantSettlements(self._raw_client, self._server, self._auth)

    @cached_property
    def invoices(self) -> AsyncInvoices:
        return AsyncInvoices(self._raw_client, self._server, self._auth)

    @cached_property
    def items(self) -> AsyncItems:
        return AsyncItems(self._raw_client, self._server, self._auth)

    @cached_property
    def linked_accounts(self) -> AsyncLinkedAccounts:
        return AsyncLinkedAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def orders(self) -> AsyncOrders:
        return AsyncOrders(self._raw_client, self._server, self._auth)

    @cached_property
    def partner_accounts(self) -> AsyncPartnerAccounts:
        return AsyncPartnerAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def partner_documents(self) -> AsyncPartnerDocuments:
        return AsyncPartnerDocuments(self._raw_client, self._server, self._auth)

    @cached_property
    def partner_stakeholders(self) -> AsyncPartnerStakeholders:
        return AsyncPartnerStakeholders(self._raw_client, self._server, self._auth)

    @cached_property
    def partner_webhooks(self) -> AsyncPartnerWebhooks:
        return AsyncPartnerWebhooks(self._raw_client, self._server, self._auth)

    @cached_property
    def payment_downtimes(self) -> AsyncPaymentDowntimes:
        return AsyncPaymentDowntimes(self._raw_client, self._server, self._auth)

    @cached_property
    def payment_links(self) -> AsyncPaymentLinks:
        return AsyncPaymentLinks(self._raw_client, self._server, self._auth)

    @cached_property
    def payments(self) -> AsyncPayments:
        return AsyncPayments(self._raw_client, self._server, self._auth)

    @cached_property
    def plans(self) -> AsyncPlans:
        return AsyncPlans(self._raw_client, self._server, self._auth)

    @cached_property
    def qr_codes(self) -> AsyncQrCodes:
        return AsyncQrCodes(self._raw_client, self._server, self._auth)

    @cached_property
    def refunds(self) -> AsyncRefunds:
        return AsyncRefunds(self._raw_client, self._server, self._auth)

    @cached_property
    def settlements_api(self) -> AsyncSettlementsApi:
        return AsyncSettlementsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def subscriptions(self) -> AsyncSubscriptions:
        return AsyncSubscriptions(self._raw_client, self._server, self._auth)

    @cached_property
    def transfers(self) -> AsyncTransfers:
        return AsyncTransfers(self._raw_client, self._server, self._auth)

    @cached_property
    def virtual_accounts(self) -> AsyncVirtualAccounts:
        return AsyncVirtualAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def x_account_validation(self) -> AsyncXAccountValidation:
        return AsyncXAccountValidation(self._raw_client, self._server, self._auth)

    @cached_property
    def x_banking_balances(self) -> AsyncXBankingBalances:
        return AsyncXBankingBalances(self._raw_client, self._server, self._auth)

    @cached_property
    def x_contacts(self) -> AsyncXContacts:
        return AsyncXContacts(self._raw_client, self._server, self._auth)

    @cached_property
    def x_fund_accounts(self) -> AsyncXFundAccounts:
        return AsyncXFundAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def x_payout_links(self) -> AsyncXPayoutLinks:
        return AsyncXPayoutLinks(self._raw_client, self._server, self._auth)

    @cached_property
    def x_payouts(self) -> AsyncXPayouts:
        return AsyncXPayouts(self._raw_client, self._server, self._auth)

    @cached_property
    def x_transactions(self) -> AsyncXTransactions:
        return AsyncXTransactions(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncCurlecClient
