from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.authentication import Authentication
from .apis.chat import Chat
from .apis.delivery import Delivery
from .apis.items import Items
from .apis.last_mile_delivery import LastMileDelivery
from .apis.orders import Orders
from .apis.pickup import Pickup
from .apis.products import Products
from .apis.replacements import Replacements
from .apis.rest import Rest
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseInstacartClient
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
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class InstacartClient(BaseInstacartClient[RawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        timeout: float = DEFAULT_TIMEOUT,
        server_config: ServerConfigOrDict | None = None,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
        api_key_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            timeout=timeout,
            server_config=server_config,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "InstacartClient/2.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
            api_key_auth=ApiKeyHeaderScheme("Authorization", api_key_auth) if api_key_auth is not None else no_auth,
        )

    @cached_property
    def authentication(self) -> Authentication:
        return Authentication(self._raw_client, self._server)

    @cached_property
    def chat(self) -> Chat:
        return Chat(self._raw_client, self._server, self._auth)

    @cached_property
    def delivery(self) -> Delivery:
        return Delivery(self._raw_client, self._server, self._auth)

    @cached_property
    def items(self) -> Items:
        return Items(self._raw_client, self._server, self._auth)

    @cached_property
    def last_mile_delivery(self) -> LastMileDelivery:
        return LastMileDelivery(self._raw_client, self._server, self._auth)

    @cached_property
    def orders(self) -> Orders:
        return Orders(self._raw_client, self._server, self._auth)

    @cached_property
    def pickup(self) -> Pickup:
        return Pickup(self._raw_client, self._server, self._auth)

    @cached_property
    def products(self) -> Products:
        return Products(self._raw_client, self._server, self._auth)

    @cached_property
    def replacements(self) -> Replacements:
        return Replacements(self._raw_client, self._server, self._auth)

    @cached_property
    def rest(self) -> Rest:
        return Rest(self._raw_client, self._server)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = InstacartClient
