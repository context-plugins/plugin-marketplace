from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.companies import Companies
from .apis.financials import Financials
from .apis.health import Health
from .apis.news import News
from .apis.persons import Persons
from .apis.registers import Registers
from .apis.tenders import Tenders
from .apis.usage import Usage
from .apis.watchlist import Watchlist
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCompabaseClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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


class CompabaseClient(BaseCompabaseClient[RawClient]):
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
        bearer_auth: str | None = None,
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
                param[str]("User-Agent", "CompabaseClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("X-API-Key", api_key_auth) if api_key_auth is not None else no_auth,
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
        )

    @cached_property
    def companies(self) -> Companies:
        return Companies(self._raw_client, self._server, self._auth)

    @cached_property
    def financials(self) -> Financials:
        return Financials(self._raw_client, self._server, self._auth)

    @cached_property
    def health(self) -> Health:
        return Health(self._raw_client, self._server)

    @cached_property
    def news(self) -> News:
        return News(self._raw_client, self._server, self._auth)

    @cached_property
    def persons(self) -> Persons:
        return Persons(self._raw_client, self._server, self._auth)

    @cached_property
    def registers(self) -> Registers:
        return Registers(self._raw_client, self._server, self._auth)

    @cached_property
    def tenders(self) -> Tenders:
        return Tenders(self._raw_client, self._server, self._auth)

    @cached_property
    def usage(self) -> Usage:
        return Usage(self._raw_client, self._server, self._auth)

    @cached_property
    def watchlist(self) -> Watchlist:
        return Watchlist(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = CompabaseClient
