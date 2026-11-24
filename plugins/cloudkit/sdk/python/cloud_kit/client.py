from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.assets import Assets
from .apis.changes import Changes
from .apis.records import Records
from .apis.subscriptions import Subscriptions
from .apis.tokens import Tokens
from .apis.users import Users
from .apis.zones import Zones
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCloudKitClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    ApiKeyQueryScheme,
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


class CloudKitClient(BaseCloudKitClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        cloud_kit_api_token: str | None = None,
        server_to_server: str | None = None,
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
                param[str]("User-Agent", "CloudKitClient/1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            cloud_kit_api_token=(
                ApiKeyQueryScheme("ckAPIToken", cloud_kit_api_token) if cloud_kit_api_token is not None else no_auth
            ),
            server_to_server=(
                ApiKeyHeaderScheme("X-Apple-CloudKit-Request-SignatureV1", server_to_server)
                if server_to_server is not None
                else no_auth
            ),
        )

    @cached_property
    def assets(self) -> Assets:
        return Assets(self._raw_client, self._server, self._auth)

    @cached_property
    def changes(self) -> Changes:
        return Changes(self._raw_client, self._server, self._auth)

    @cached_property
    def records(self) -> Records:
        return Records(self._raw_client, self._server, self._auth)

    @cached_property
    def subscriptions(self) -> Subscriptions:
        return Subscriptions(self._raw_client, self._server, self._auth)

    @cached_property
    def tokens(self) -> Tokens:
        return Tokens(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> Users:
        return Users(self._raw_client, self._server, self._auth)

    @cached_property
    def zones(self) -> Zones:
        return Zones(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = CloudKitClient
