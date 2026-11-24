from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.agents import AsyncAgents
from .apis.credentials import AsyncCredentials
from .apis.deliveries import AsyncDeliveries
from .apis.fillo_management_api import AsyncFilloManagementApi
from .apis.forms import AsyncForms
from .apis.insights import AsyncInsights
from .apis.integrations import AsyncIntegrations
from .apis.members import AsyncMembers
from .apis.respondents import AsyncRespondents
from .apis.responses import AsyncResponses
from .apis.settings import AsyncSettings
from .apis.storage import AsyncStorage
from .apis.webhooks_api import AsyncWebhooksApi
from .apis.workspace_api import AsyncWorkspaceApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseFilloClient
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


class AsyncFilloClient(BaseFilloClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth: str | None = None,
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
                param[str]("User-Agent", "FilloClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def agents(self) -> AsyncAgents:
        return AsyncAgents(self._raw_client, self._server, self._auth)

    @cached_property
    def credentials(self) -> AsyncCredentials:
        return AsyncCredentials(self._raw_client, self._server, self._auth)

    @cached_property
    def deliveries(self) -> AsyncDeliveries:
        return AsyncDeliveries(self._raw_client, self._server, self._auth)

    @cached_property
    def fillo_management_api(self) -> AsyncFilloManagementApi:
        return AsyncFilloManagementApi(self._raw_client, self._server)

    @cached_property
    def forms(self) -> AsyncForms:
        return AsyncForms(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> AsyncInsights:
        return AsyncInsights(self._raw_client, self._server, self._auth)

    @cached_property
    def integrations(self) -> AsyncIntegrations:
        return AsyncIntegrations(self._raw_client, self._server, self._auth)

    @cached_property
    def members(self) -> AsyncMembers:
        return AsyncMembers(self._raw_client, self._server, self._auth)

    @cached_property
    def respondents(self) -> AsyncRespondents:
        return AsyncRespondents(self._raw_client, self._server, self._auth)

    @cached_property
    def responses(self) -> AsyncResponses:
        return AsyncResponses(self._raw_client, self._server, self._auth)

    @cached_property
    def settings(self) -> AsyncSettings:
        return AsyncSettings(self._raw_client, self._server, self._auth)

    @cached_property
    def storage(self) -> AsyncStorage:
        return AsyncStorage(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> AsyncWebhooksApi:
        return AsyncWebhooksApi(self._raw_client, self._server, self._auth)

    @cached_property
    def workspace_api(self) -> AsyncWorkspaceApi:
        return AsyncWorkspaceApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncFilloClient
