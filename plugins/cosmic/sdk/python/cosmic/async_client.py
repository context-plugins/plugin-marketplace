from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.blocks import AsyncBlocks
from .apis.media_api import AsyncMediaApi
from .apis.object_revisions import AsyncObjectRevisions
from .apis.object_types import AsyncObjectTypes
from .apis.objects import AsyncObjects
from .apis.status_api import AsyncStatusApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCosmicClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyQueryScheme,
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


class AsyncCosmicClient(BaseCosmicClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        read_key: str | None = None,
        write_key: str | None = None,
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
                param[str]("User-Agent", "CosmicClient/3.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "3.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            read_key=ApiKeyQueryScheme("read_key", read_key) if read_key is not None else no_auth,
            write_key=BearerAuthScheme(write_key) if write_key is not None else no_auth,
        )

    @cached_property
    def blocks(self) -> AsyncBlocks:
        return AsyncBlocks(self._raw_client, self._server, self._auth)

    @cached_property
    def media_api(self) -> AsyncMediaApi:
        return AsyncMediaApi(self._raw_client, self._server, self._auth)

    @cached_property
    def object_revisions(self) -> AsyncObjectRevisions:
        return AsyncObjectRevisions(self._raw_client, self._server, self._auth)

    @cached_property
    def object_types(self) -> AsyncObjectTypes:
        return AsyncObjectTypes(self._raw_client, self._server, self._auth)

    @cached_property
    def objects(self) -> AsyncObjects:
        return AsyncObjects(self._raw_client, self._server, self._auth)

    @cached_property
    def status_api(self) -> AsyncStatusApi:
        return AsyncStatusApi(self._raw_client, self._server)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncCosmicClient
