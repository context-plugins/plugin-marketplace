from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.bases import Bases
from .apis.comments import Comments
from .apis.fields import Fields
from .apis.groups import Groups
from .apis.records import Records
from .apis.tables import Tables
from .apis.users import Users
from .apis.webhooks_api import WebhooksApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAirtableClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
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
from .server.server_config import ServerConfigOrDict


class AirtableClient(BaseAirtableClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "AirtableClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def bases(self) -> Bases:
        return Bases(self._raw_client, self._server, self._auth)

    @cached_property
    def comments(self) -> Comments:
        return Comments(self._raw_client, self._server, self._auth)

    @cached_property
    def fields(self) -> Fields:
        return Fields(self._raw_client, self._server, self._auth)

    @cached_property
    def groups(self) -> Groups:
        return Groups(self._raw_client, self._server, self._auth)

    @cached_property
    def records(self) -> Records:
        return Records(self._raw_client, self._server, self._auth)

    @cached_property
    def tables(self) -> Tables:
        return Tables(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> Users:
        return Users(self._raw_client, self._server, self._auth)

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


Client = AirtableClient
