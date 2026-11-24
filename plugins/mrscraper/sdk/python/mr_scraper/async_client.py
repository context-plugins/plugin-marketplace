from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.analytic import AsyncAnalytic
from .apis.auth_api import AsyncAuthApi
from .apis.gateway import AsyncGateway
from .apis.jobs import AsyncJobs
from .apis.proxies import AsyncProxies
from .apis.results import AsyncResults
from .apis.storage import AsyncStorage
from .apis.tasks import AsyncTasks
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseMrScraperClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)
from .server.server_config import ServerConfigOrDict


class AsyncMrScraperClient(BaseMrScraperClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key: str | None = None,
        bearer_auth: str | None = None,
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
                param[str]("User-Agent", "MrScraperClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key=ApiKeyHeaderScheme("x-api-token", api_key) if api_key is not None else no_auth,
            bearer_auth=ApiKeyHeaderScheme("Authorization", bearer_auth) if bearer_auth is not None else no_auth,
        )

    @cached_property
    def analytic(self) -> AsyncAnalytic:
        return AsyncAnalytic(self._raw_client, self._server, self._auth)

    @cached_property
    def auth_api(self) -> AsyncAuthApi:
        return AsyncAuthApi(self._raw_client, self._server, self._auth)

    @cached_property
    def gateway(self) -> AsyncGateway:
        return AsyncGateway(self._raw_client, self._server, self._auth)

    @cached_property
    def jobs(self) -> AsyncJobs:
        return AsyncJobs(self._raw_client, self._server, self._auth)

    @cached_property
    def proxies(self) -> AsyncProxies:
        return AsyncProxies(self._raw_client, self._server, self._auth)

    @cached_property
    def results(self) -> AsyncResults:
        return AsyncResults(self._raw_client, self._server, self._auth)

    @cached_property
    def storage(self) -> AsyncStorage:
        return AsyncStorage(self._raw_client, self._server, self._auth)

    @cached_property
    def tasks(self) -> AsyncTasks:
        return AsyncTasks(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncMrScraperClient
