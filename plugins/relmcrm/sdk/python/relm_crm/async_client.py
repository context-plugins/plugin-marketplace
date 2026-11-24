from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.activities import AsyncActivities
from .apis.automations import AsyncAutomations
from .apis.batch import AsyncBatch
from .apis.companies import AsyncCompanies
from .apis.connections import AsyncConnections
from .apis.contacts import AsyncContacts
from .apis.deals import AsyncDeals
from .apis.discovery import AsyncDiscovery
from .apis.pipelines import AsyncPipelines
from .apis.registry import AsyncRegistry
from .apis.search import AsyncSearch
from .apis.sequences import AsyncSequences
from .apis.templates import AsyncTemplates
from .apis.webhooks_api import AsyncWebhooksApi
from .auth import AsyncAuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseRelmCrmClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncAuthorizationCodeCredentials,
    AsyncAuthorizationCodeCredentialsOrDict,
    AsyncAuthorizationCodeTokenSource,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncOAuth2RefreshableScheme,
    AsyncRawClient,
    AsyncRefreshableTokenSource,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    client_secret_basic,
    no_auth,
    param,
)
from .server.server_config import ServerConfigOrDict


class AsyncRelmCrmClient(BaseRelmCrmClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth: str | None = None,
        oauth2: AsyncAuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: AsyncRefreshableTokenSource[AsyncAuthorizationCodeCredentials[Oauth2Scope]] | None = None,
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
                param[str]("User-Agent", "RelmCrmClient/0.17.1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.17.1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
            oauth2=(
                AsyncOAuth2RefreshableScheme(
                    credentials=AsyncAuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AsyncAuthorizationCodeTokenSource[Oauth2Scope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/authorize"),
                            token_url=self._server.auth_server("/token"),
                            refresh_url=self._server.auth_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2 is not None
                else no_auth
            ),
        )

    @cached_property
    def activities(self) -> AsyncActivities:
        return AsyncActivities(self._raw_client, self._server, self._auth)

    @cached_property
    def automations(self) -> AsyncAutomations:
        return AsyncAutomations(self._raw_client, self._server, self._auth)

    @cached_property
    def batch(self) -> AsyncBatch:
        return AsyncBatch(self._raw_client, self._server, self._auth)

    @cached_property
    def companies(self) -> AsyncCompanies:
        return AsyncCompanies(self._raw_client, self._server, self._auth)

    @cached_property
    def connections(self) -> AsyncConnections:
        return AsyncConnections(self._raw_client, self._server, self._auth)

    @cached_property
    def contacts(self) -> AsyncContacts:
        return AsyncContacts(self._raw_client, self._server, self._auth)

    @cached_property
    def deals(self) -> AsyncDeals:
        return AsyncDeals(self._raw_client, self._server, self._auth)

    @cached_property
    def discovery(self) -> AsyncDiscovery:
        return AsyncDiscovery(self._raw_client, self._server, self._auth)

    @cached_property
    def pipelines(self) -> AsyncPipelines:
        return AsyncPipelines(self._raw_client, self._server, self._auth)

    @cached_property
    def registry(self) -> AsyncRegistry:
        return AsyncRegistry(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> AsyncSearch:
        return AsyncSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def sequences(self) -> AsyncSequences:
        return AsyncSequences(self._raw_client, self._server, self._auth)

    @cached_property
    def templates(self) -> AsyncTemplates:
        return AsyncTemplates(self._raw_client, self._server, self._auth)

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


AsyncClient = AsyncRelmCrmClient
