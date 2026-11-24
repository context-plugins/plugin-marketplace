from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.change_stream import ChangeStream
from .apis.filters import Filters
from .apis.image_proxy import ImageProxy
from .apis.locations import Locations
from .apis.market import Market
from .apis.related_vehicles import RelatedVehicles
from .apis.shipping import Shipping
from .apis.url_tools import UrlTools
from .apis.usage import Usage
from .apis.vehicle_auction import VehicleAuction
from .apis.vehicle_history import VehicleHistory
from .apis.vehicles import Vehicles
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseApibaraClient
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


class ApibaraClient(BaseApibaraClient[RawClient]):
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
                param[str]("User-Agent", "ApibaraClient/1.1.2 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.1.2"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("X-API-Key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def change_stream(self) -> ChangeStream:
        return ChangeStream(self._raw_client, self._server, self._auth)

    @cached_property
    def filters(self) -> Filters:
        return Filters(self._raw_client, self._server, self._auth)

    @cached_property
    def image_proxy(self) -> ImageProxy:
        return ImageProxy(self._raw_client, self._server, self._auth)

    @cached_property
    def locations(self) -> Locations:
        return Locations(self._raw_client, self._server, self._auth)

    @cached_property
    def market(self) -> Market:
        return Market(self._raw_client, self._server, self._auth)

    @cached_property
    def related_vehicles(self) -> RelatedVehicles:
        return RelatedVehicles(self._raw_client, self._server, self._auth)

    @cached_property
    def shipping(self) -> Shipping:
        return Shipping(self._raw_client, self._server, self._auth)

    @cached_property
    def url_tools(self) -> UrlTools:
        return UrlTools(self._raw_client, self._server, self._auth)

    @cached_property
    def usage(self) -> Usage:
        return Usage(self._raw_client, self._server, self._auth)

    @cached_property
    def vehicle_auction(self) -> VehicleAuction:
        return VehicleAuction(self._raw_client, self._server, self._auth)

    @cached_property
    def vehicle_history(self) -> VehicleHistory:
        return VehicleHistory(self._raw_client, self._server, self._auth)

    @cached_property
    def vehicles(self) -> Vehicles:
        return Vehicles(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = ApibaraClient
