from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.compliance import Compliance
from .apis.events import Events
from .apis.identity import Identity
from .apis.keywords import Keywords
from .apis.messages import Messages
from .apis.subscribers import Subscribers
from .apis.webhooks_api import WebhooksApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BasePostscriptClient
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


class PostscriptClient(BasePostscriptClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        sec0: str | None = None,
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
                param[str]("User-Agent", "PostscriptClient/2.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(sec0=ApiKeyHeaderScheme("Authorization", sec0) if sec0 is not None else no_auth)

    @cached_property
    def compliance(self) -> Compliance:
        return Compliance(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> Events:
        return Events(self._raw_client, self._server, self._auth)

    @cached_property
    def identity(self) -> Identity:
        return Identity(self._raw_client, self._server, self._auth)

    @cached_property
    def keywords(self) -> Keywords:
        return Keywords(self._raw_client, self._server, self._auth)

    @cached_property
    def messages(self) -> Messages:
        return Messages(self._raw_client, self._server, self._auth)

    @cached_property
    def subscribers(self) -> Subscribers:
        return Subscribers(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> WebhooksApi:
        return WebhooksApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = PostscriptClient
