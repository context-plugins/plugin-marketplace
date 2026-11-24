from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.assets import AsyncAssets
from .apis.changes import AsyncChanges
from .apis.records import AsyncRecords
from .apis.subscriptions import AsyncSubscriptions
from .apis.tokens import AsyncTokens
from .apis.users import AsyncUsers
from .apis.zones import AsyncZones
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCloudKitClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    ApiKeyQueryScheme,
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


class AsyncCloudKitClient(BaseCloudKitClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        cloud_kit_api_token: str | None = None,
        server_to_server: str | None = None,
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
                param[str]("User-Agent", "CloudKitClient/1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            cloud_kit_api_token=(
                ApiKeyQueryScheme("ckAPIToken", cloud_kit_api_token) if cloud_kit_api_token is not None else no_auth
            ),
            server_to_server=(
                ApiKeyHeaderScheme("X-Apple-CloudKit-Request-SignatureV1", server_to_server)
                if server_to_server is not None
                else no_auth
            ),
        )

    @cached_property
    def assets(self) -> AsyncAssets:
        return AsyncAssets(self._raw_client, self._server, self._auth)

    @cached_property
    def changes(self) -> AsyncChanges:
        return AsyncChanges(self._raw_client, self._server, self._auth)

    @cached_property
    def records(self) -> AsyncRecords:
        return AsyncRecords(self._raw_client, self._server, self._auth)

    @cached_property
    def subscriptions(self) -> AsyncSubscriptions:
        return AsyncSubscriptions(self._raw_client, self._server, self._auth)

    @cached_property
    def tokens(self) -> AsyncTokens:
        return AsyncTokens(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> AsyncUsers:
        return AsyncUsers(self._raw_client, self._server, self._auth)

    @cached_property
    def zones(self) -> AsyncZones:
        return AsyncZones(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncCloudKitClient
