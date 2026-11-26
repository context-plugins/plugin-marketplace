from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.app_events import AppEvents
from .apis.app_partner_connection_api import AppPartnerConnectionApi
from .apis.apps import Apps
from .apis.bids import Bids
from .apis.campaigns import Campaigns
from .apis.partner_configurations import PartnerConfigurations
from .apis.partners import Partners
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseJusttrackClient
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
from .server.server_config import ServerConfigOrDict


class JusttrackClient(BaseJusttrackClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key_auth: str | None = None,
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
                param[str]("User-Agent", "JusttrackClient/v1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("X-API-Key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def app_events(self) -> AppEvents:
        return AppEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def app_partner_connection_api(self) -> AppPartnerConnectionApi:
        return AppPartnerConnectionApi(self._raw_client, self._server, self._auth)

    @cached_property
    def apps(self) -> Apps:
        return Apps(self._raw_client, self._server, self._auth)

    @cached_property
    def bids(self) -> Bids:
        return Bids(self._raw_client, self._server, self._auth)

    @cached_property
    def campaigns(self) -> Campaigns:
        return Campaigns(self._raw_client, self._server, self._auth)

    @cached_property
    def partner_configurations(self) -> PartnerConfigurations:
        return PartnerConfigurations(self._raw_client, self._server, self._auth)

    @cached_property
    def partners(self) -> Partners:
        return Partners(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = JusttrackClient
