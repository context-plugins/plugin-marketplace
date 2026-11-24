from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.compliance import AsyncCompliance
from .apis.events import AsyncEvents
from .apis.identity import AsyncIdentity
from .apis.keywords import AsyncKeywords
from .apis.messages import AsyncMessages
from .apis.subscribers import AsyncSubscribers
from .apis.webhooks_api import AsyncWebhooksApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BasePostscriptClient
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


class AsyncPostscriptClient(BasePostscriptClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        sec0: str | None = None,
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
                param[str]("User-Agent", "PostscriptClient/2.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(sec0=ApiKeyHeaderScheme("Authorization", sec0) if sec0 is not None else no_auth)

    @cached_property
    def compliance(self) -> AsyncCompliance:
        return AsyncCompliance(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> AsyncEvents:
        return AsyncEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def identity(self) -> AsyncIdentity:
        return AsyncIdentity(self._raw_client, self._server, self._auth)

    @cached_property
    def keywords(self) -> AsyncKeywords:
        return AsyncKeywords(self._raw_client, self._server, self._auth)

    @cached_property
    def messages(self) -> AsyncMessages:
        return AsyncMessages(self._raw_client, self._server, self._auth)

    @cached_property
    def subscribers(self) -> AsyncSubscribers:
        return AsyncSubscribers(self._raw_client, self._server, self._auth)

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


AsyncClient = AsyncPostscriptClient
