from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.accounts_api import AsyncAccountsApi
from .apis.analytics import AsyncAnalytics
from .apis.auth_links import AsyncAuthLinks
from .apis.authentication import AsyncAuthentication
from .apis.connections import AsyncConnections
from .apis.connectors import AsyncConnectors
from .apis.consents import AsyncConsents
from .apis.enrich_api import AsyncEnrichApi
from .apis.events import AsyncEvents
from .apis.expenses import AsyncExpenses
from .apis.identities import AsyncIdentities
from .apis.income_api import AsyncIncomeApi
from .apis.insights import AsyncInsights
from .apis.jobs import AsyncJobs
from .apis.payees import AsyncPayees
from .apis.reports import AsyncReports
from .apis.statements import AsyncStatements
from .apis.transactions import AsyncTransactions
from .apis.users import AsyncUsers
from .apis.webhooks_api import AsyncWebhooksApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBasiqClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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


class AsyncBasiqClient(BaseBasiqClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key: str | None = None,
        services_token: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "BasiqClient/3.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "3.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key=ApiKeyHeaderScheme("Authorization", api_key) if api_key is not None else no_auth,
            services_token=BearerAuthScheme(services_token) if services_token is not None else no_auth,
        )

    @cached_property
    def accounts_api(self) -> AsyncAccountsApi:
        return AsyncAccountsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def analytics(self) -> AsyncAnalytics:
        return AsyncAnalytics(self._raw_client, self._server, self._auth)

    @cached_property
    def auth_links(self) -> AsyncAuthLinks:
        return AsyncAuthLinks(self._raw_client, self._server, self._auth)

    @cached_property
    def authentication(self) -> AsyncAuthentication:
        return AsyncAuthentication(self._raw_client, self._server, self._auth)

    @cached_property
    def connections(self) -> AsyncConnections:
        return AsyncConnections(self._raw_client, self._server, self._auth)

    @cached_property
    def connectors(self) -> AsyncConnectors:
        return AsyncConnectors(self._raw_client, self._server, self._auth)

    @cached_property
    def consents(self) -> AsyncConsents:
        return AsyncConsents(self._raw_client, self._server, self._auth)

    @cached_property
    def enrich_api(self) -> AsyncEnrichApi:
        return AsyncEnrichApi(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> AsyncEvents:
        return AsyncEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def expenses(self) -> AsyncExpenses:
        return AsyncExpenses(self._raw_client, self._server, self._auth)

    @cached_property
    def identities(self) -> AsyncIdentities:
        return AsyncIdentities(self._raw_client, self._server, self._auth)

    @cached_property
    def income_api(self) -> AsyncIncomeApi:
        return AsyncIncomeApi(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> AsyncInsights:
        return AsyncInsights(self._raw_client, self._server, self._auth)

    @cached_property
    def jobs(self) -> AsyncJobs:
        return AsyncJobs(self._raw_client, self._server, self._auth)

    @cached_property
    def payees(self) -> AsyncPayees:
        return AsyncPayees(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> AsyncReports:
        return AsyncReports(self._raw_client, self._server, self._auth)

    @cached_property
    def statements(self) -> AsyncStatements:
        return AsyncStatements(self._raw_client, self._server, self._auth)

    @cached_property
    def transactions(self) -> AsyncTransactions:
        return AsyncTransactions(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> AsyncUsers:
        return AsyncUsers(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> AsyncWebhooksApi:
        return AsyncWebhooksApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncBasiqClient
