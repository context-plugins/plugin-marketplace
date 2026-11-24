from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.call_records import AsyncCallRecords
from .apis.email import AsyncEmail
from .apis.faxes import AsyncFaxes
from .apis.messaging_api import AsyncMessagingApi
from .apis.outbound_calls import AsyncOutboundCalls
from .apis.phone_numbers import AsyncPhoneNumbers
from .apis.sip_trunks import AsyncSipTrunks
from .apis.wholesale import AsyncWholesale
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCallNodeClient
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


class AsyncCallNodeClient(BaseCallNodeClient[AsyncRawClient]):
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
        timestamp_auth: str | None = None,
        signature_auth: str | None = None,
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
                param[str]("User-Agent", "CallNodeClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("X-Api-Key", api_key_auth) if api_key_auth is not None else no_auth,
            timestamp_auth=ApiKeyHeaderScheme("X-Timestamp", timestamp_auth) if timestamp_auth is not None else no_auth,
            signature_auth=ApiKeyHeaderScheme("X-Signature", signature_auth) if signature_auth is not None else no_auth,
        )

    @cached_property
    def call_records(self) -> AsyncCallRecords:
        return AsyncCallRecords(self._raw_client, self._server, self._auth)

    @cached_property
    def email(self) -> AsyncEmail:
        return AsyncEmail(self._raw_client, self._server, self._auth)

    @cached_property
    def faxes(self) -> AsyncFaxes:
        return AsyncFaxes(self._raw_client, self._server, self._auth)

    @cached_property
    def messaging_api(self) -> AsyncMessagingApi:
        return AsyncMessagingApi(self._raw_client, self._server, self._auth)

    @cached_property
    def outbound_calls(self) -> AsyncOutboundCalls:
        return AsyncOutboundCalls(self._raw_client, self._server, self._auth)

    @cached_property
    def phone_numbers(self) -> AsyncPhoneNumbers:
        return AsyncPhoneNumbers(self._raw_client, self._server, self._auth)

    @cached_property
    def sip_trunks(self) -> AsyncSipTrunks:
        return AsyncSipTrunks(self._raw_client, self._server, self._auth)

    @cached_property
    def wholesale(self) -> AsyncWholesale:
        return AsyncWholesale(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncCallNodeClient
