from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.apps import Apps
from .apis.bitlinks_api import BitlinksApi
from .apis.bs_ds import BsDs
from .apis.campaigns_api import CampaignsApi
from .apis.custom_bitlinks import CustomBitlinks
from .apis.groups_api import GroupsApi
from .apis.organizations_api import OrganizationsApi
from .apis.qr_codes import QrCodes
from .apis.user_api import UserApi
from .apis.webhooks_api import WebhooksApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBitlyClient
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


class BitlyClient(BaseBitlyClient[RawClient]):
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
                param[str]("User-Agent", "BitlyClient/4.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "4.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def apps(self) -> Apps:
        return Apps(self._raw_client, self._server, self._auth)

    @cached_property
    def bs_ds(self) -> BsDs:
        return BsDs(self._raw_client, self._server, self._auth)

    @cached_property
    def bitlinks_api(self) -> BitlinksApi:
        return BitlinksApi(self._raw_client, self._server, self._auth)

    @cached_property
    def campaigns_api(self) -> CampaignsApi:
        return CampaignsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_bitlinks(self) -> CustomBitlinks:
        return CustomBitlinks(self._raw_client, self._server, self._auth)

    @cached_property
    def groups_api(self) -> GroupsApi:
        return GroupsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def organizations_api(self) -> OrganizationsApi:
        return OrganizationsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def qr_codes(self) -> QrCodes:
        return QrCodes(self._raw_client, self._server, self._auth)

    @cached_property
    def user_api(self) -> UserApi:
        return UserApi(self._raw_client, self._server, self._auth)

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


Client = BitlyClient
