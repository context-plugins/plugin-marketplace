from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.analyze import Analyze
from .apis.batch import Batch
from .apis.credentials import Credentials
from .apis.grants_api import GrantsApi
from .apis.meta import Meta
from .apis.organizations import Organizations
from .apis.pulse import Pulse
from .apis.resolve import Resolve
from .apis.sql import Sql
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BasePlinthUsGrantsDataClient
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


class PlinthUsGrantsDataClient(BasePlinthUsGrantsDataClient[RawClient]):
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
                param[str]("User-Agent", "PlinthUsGrantsDataClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("X-API-Key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def analyze(self) -> Analyze:
        return Analyze(self._raw_client, self._server, self._auth)

    @cached_property
    def batch(self) -> Batch:
        return Batch(self._raw_client, self._server, self._auth)

    @cached_property
    def credentials(self) -> Credentials:
        return Credentials(self._raw_client, self._server)

    @cached_property
    def grants_api(self) -> GrantsApi:
        return GrantsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def meta(self) -> Meta:
        return Meta(self._raw_client, self._server)

    @cached_property
    def organizations(self) -> Organizations:
        return Organizations(self._raw_client, self._server, self._auth)

    @cached_property
    def pulse(self) -> Pulse:
        return Pulse(self._raw_client, self._server, self._auth)

    @cached_property
    def resolve(self) -> Resolve:
        return Resolve(self._raw_client, self._server)

    @cached_property
    def sql(self) -> Sql:
        return Sql(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = PlinthUsGrantsDataClient
