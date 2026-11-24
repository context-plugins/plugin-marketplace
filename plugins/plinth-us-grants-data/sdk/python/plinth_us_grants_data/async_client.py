from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.analyze import AsyncAnalyze
from .apis.batch import AsyncBatch
from .apis.credentials import AsyncCredentials
from .apis.grants_api import AsyncGrantsApi
from .apis.meta import AsyncMeta
from .apis.organizations import AsyncOrganizations
from .apis.pulse import AsyncPulse
from .apis.resolve import AsyncResolve
from .apis.sql import AsyncSql
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BasePlinthUsGrantsDataClient
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


class AsyncPlinthUsGrantsDataClient(BasePlinthUsGrantsDataClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key_auth: str | None = None,
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
                param[str]("User-Agent", "PlinthUsGrantsDataClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("X-API-Key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def analyze(self) -> AsyncAnalyze:
        return AsyncAnalyze(self._raw_client, self._server, self._auth)

    @cached_property
    def batch(self) -> AsyncBatch:
        return AsyncBatch(self._raw_client, self._server, self._auth)

    @cached_property
    def credentials(self) -> AsyncCredentials:
        return AsyncCredentials(self._raw_client, self._server)

    @cached_property
    def grants_api(self) -> AsyncGrantsApi:
        return AsyncGrantsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def meta(self) -> AsyncMeta:
        return AsyncMeta(self._raw_client, self._server)

    @cached_property
    def organizations(self) -> AsyncOrganizations:
        return AsyncOrganizations(self._raw_client, self._server, self._auth)

    @cached_property
    def pulse(self) -> AsyncPulse:
        return AsyncPulse(self._raw_client, self._server, self._auth)

    @cached_property
    def resolve(self) -> AsyncResolve:
        return AsyncResolve(self._raw_client, self._server)

    @cached_property
    def sql(self) -> AsyncSql:
        return AsyncSql(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncPlinthUsGrantsDataClient
