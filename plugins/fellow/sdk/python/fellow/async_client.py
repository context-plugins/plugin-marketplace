from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.action_items import AsyncActionItems
from .apis.notes import AsyncNotes
from .apis.recordings import AsyncRecordings
from .apis.users import AsyncUsers
from .apis.webhooks_api import AsyncWebhooksApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseFellowClient
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


class AsyncFellowClient(BaseFellowClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        developer_api_key_auth: str | None = None,
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
                param[str]("User-Agent", "FellowClient/1.0.3 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.3"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            developer_api_key_auth=(
                ApiKeyHeaderScheme("X-API-KEY", developer_api_key_auth)
                if developer_api_key_auth is not None
                else no_auth
            ),
        )

    @cached_property
    def action_items(self) -> AsyncActionItems:
        return AsyncActionItems(self._raw_client, self._server, self._auth)

    @cached_property
    def notes(self) -> AsyncNotes:
        return AsyncNotes(self._raw_client, self._server, self._auth)

    @cached_property
    def recordings(self) -> AsyncRecordings:
        return AsyncRecordings(self._raw_client, self._server, self._auth)

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


AsyncClient = AsyncFellowClient
