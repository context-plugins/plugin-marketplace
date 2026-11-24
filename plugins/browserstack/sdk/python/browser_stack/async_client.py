from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.access_key import AsyncAccessKey
from .apis.browsers import AsyncBrowsers
from .apis.builds import AsyncBuilds
from .apis.plan_api import AsyncPlanApi
from .apis.projects import AsyncProjects
from .apis.sessions import AsyncSessions
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBrowserStackClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BasicAuthCredentials,
    BasicAuthCredentialsOrDict,
    BasicAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncBrowserStackClient(BaseBrowserStackClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        basic_auth: BasicAuthCredentialsOrDict | None = None,
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
                param[str]("User-Agent", "BrowserStackClient/1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            basic_auth=BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth)) if basic_auth is not None else no_auth
        )

    @cached_property
    def access_key(self) -> AsyncAccessKey:
        return AsyncAccessKey(self._raw_client, self._server, self._auth)

    @cached_property
    def browsers(self) -> AsyncBrowsers:
        return AsyncBrowsers(self._raw_client, self._server, self._auth)

    @cached_property
    def builds(self) -> AsyncBuilds:
        return AsyncBuilds(self._raw_client, self._server, self._auth)

    @cached_property
    def plan_api(self) -> AsyncPlanApi:
        return AsyncPlanApi(self._raw_client, self._server, self._auth)

    @cached_property
    def projects(self) -> AsyncProjects:
        return AsyncProjects(self._raw_client, self._server, self._auth)

    @cached_property
    def sessions(self) -> AsyncSessions:
        return AsyncSessions(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncBrowserStackClient
