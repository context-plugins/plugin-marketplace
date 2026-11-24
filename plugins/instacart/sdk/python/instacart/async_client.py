from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.authentication import AsyncAuthentication
from .apis.chat import AsyncChat
from .apis.delivery import AsyncDelivery
from .apis.items import AsyncItems
from .apis.last_mile_delivery import AsyncLastMileDelivery
from .apis.orders import AsyncOrders
from .apis.pickup import AsyncPickup
from .apis.products import AsyncProducts
from .apis.replacements import AsyncReplacements
from .apis.rest import AsyncRest
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseInstacartClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class AsyncInstacartClient(BaseInstacartClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        timeout: float = DEFAULT_TIMEOUT,
        server_config: ServerConfigOrDict | None = None,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
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
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
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
        self._auth = AsyncAuthSchemes(
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
            api_key_auth=ApiKeyHeaderScheme("Authorization", api_key_auth) if api_key_auth is not None else no_auth,
        )

    @cached_property
    def authentication(self) -> AsyncAuthentication:
        return AsyncAuthentication(self._raw_client, self._server)

    @cached_property
    def chat(self) -> AsyncChat:
        return AsyncChat(self._raw_client, self._server, self._auth)

    @cached_property
    def delivery(self) -> AsyncDelivery:
        return AsyncDelivery(self._raw_client, self._server, self._auth)

    @cached_property
    def items(self) -> AsyncItems:
        return AsyncItems(self._raw_client, self._server, self._auth)

    @cached_property
    def last_mile_delivery(self) -> AsyncLastMileDelivery:
        return AsyncLastMileDelivery(self._raw_client, self._server, self._auth)

    @cached_property
    def orders(self) -> AsyncOrders:
        return AsyncOrders(self._raw_client, self._server, self._auth)

    @cached_property
    def pickup(self) -> AsyncPickup:
        return AsyncPickup(self._raw_client, self._server, self._auth)

    @cached_property
    def products(self) -> AsyncProducts:
        return AsyncProducts(self._raw_client, self._server, self._auth)

    @cached_property
    def replacements(self) -> AsyncReplacements:
        return AsyncReplacements(self._raw_client, self._server, self._auth)

    @cached_property
    def rest(self) -> AsyncRest:
        return AsyncRest(self._raw_client, self._server)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncInstacartClient
