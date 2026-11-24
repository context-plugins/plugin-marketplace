from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.call_records import CallRecords
from .apis.email import Email
from .apis.faxes import Faxes
from .apis.messaging_api import MessagingApi
from .apis.outbound_calls import OutboundCalls
from .apis.phone_numbers import PhoneNumbers
from .apis.sip_trunks import SipTrunks
from .apis.wholesale import Wholesale
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCallNodeClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    no_auth,
    param,
)


class CallNodeClient(BaseCallNodeClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key_auth: str | None = None,
        timestamp_auth: str | None = None,
        signature_auth: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("X-Api-Key", api_key_auth) if api_key_auth is not None else no_auth,
            timestamp_auth=ApiKeyHeaderScheme("X-Timestamp", timestamp_auth) if timestamp_auth is not None else no_auth,
            signature_auth=ApiKeyHeaderScheme("X-Signature", signature_auth) if signature_auth is not None else no_auth,
        )

    @cached_property
    def call_records(self) -> CallRecords:
        return CallRecords(self._raw_client, self._server, self._auth)

    @cached_property
    def email(self) -> Email:
        return Email(self._raw_client, self._server, self._auth)

    @cached_property
    def faxes(self) -> Faxes:
        return Faxes(self._raw_client, self._server, self._auth)

    @cached_property
    def messaging_api(self) -> MessagingApi:
        return MessagingApi(self._raw_client, self._server, self._auth)

    @cached_property
    def outbound_calls(self) -> OutboundCalls:
        return OutboundCalls(self._raw_client, self._server, self._auth)

    @cached_property
    def phone_numbers(self) -> PhoneNumbers:
        return PhoneNumbers(self._raw_client, self._server, self._auth)

    @cached_property
    def sip_trunks(self) -> SipTrunks:
        return SipTrunks(self._raw_client, self._server, self._auth)

    @cached_property
    def wholesale(self) -> Wholesale:
        return Wholesale(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = CallNodeClient
