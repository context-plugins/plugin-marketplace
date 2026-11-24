from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account import Account
from .apis.batch import Batch
from .apis.health import Health
from .apis.jobs import Jobs
from .apis.screenshot import Screenshot
from .apis.watch_api import WatchApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseRendexClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    ApiKeyQueryScheme,
    BearerAuthScheme,
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


class RendexClient(BaseRendexClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
        api_key_header: str | None = None,
        api_key_query: str | None = None,
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
                param[str]("User-Agent", "RendexClient/1.8.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.8.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
            api_key_header=ApiKeyHeaderScheme("x-api-key", api_key_header) if api_key_header is not None else no_auth,
            api_key_query=ApiKeyQueryScheme("key", api_key_query) if api_key_query is not None else no_auth,
        )

    @cached_property
    def account(self) -> Account:
        return Account(self._raw_client, self._server, self._auth)

    @cached_property
    def batch(self) -> Batch:
        return Batch(self._raw_client, self._server, self._auth)

    @cached_property
    def health(self) -> Health:
        return Health(self._raw_client, self._server)

    @cached_property
    def jobs(self) -> Jobs:
        return Jobs(self._raw_client, self._server, self._auth)

    @cached_property
    def screenshot(self) -> Screenshot:
        return Screenshot(self._raw_client, self._server, self._auth)

    @cached_property
    def watch_api(self) -> WatchApi:
        return WatchApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = RendexClient
