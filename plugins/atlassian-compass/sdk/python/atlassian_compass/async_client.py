from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.attachment_rest_controller import AsyncAttachmentRestController
from .apis.entitlement_rest_controller import AsyncEntitlementRestController
from .apis.events import AsyncEvents
from .apis.incoming_webhooks_rest_controller import AsyncIncomingWebhooksRestController
from .apis.metrics import AsyncMetrics
from .apis.package_dependencies import AsyncPackageDependencies
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAtlassianCompassClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BasicAuthCredentials,
    BasicAuthCredentialsOrDict,
    BasicAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncAtlassianCompassClient(BaseAtlassianCompassClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        basic_auth: BasicAuthCredentialsOrDict | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "AtlassianCompassClient/1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            basic_auth=BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth)) if basic_auth is not None else no_auth
        )

    @cached_property
    def events(self) -> AsyncEvents:
        return AsyncEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def metrics(self) -> AsyncMetrics:
        return AsyncMetrics(self._raw_client, self._server, self._auth)

    @cached_property
    def package_dependencies(self) -> AsyncPackageDependencies:
        return AsyncPackageDependencies(self._raw_client, self._server, self._auth)

    @cached_property
    def attachment_rest_controller(self) -> AsyncAttachmentRestController:
        return AsyncAttachmentRestController(self._raw_client, self._server, self._auth)

    @cached_property
    def entitlement_rest_controller(self) -> AsyncEntitlementRestController:
        return AsyncEntitlementRestController(self._raw_client, self._server, self._auth)

    @cached_property
    def incoming_webhooks_rest_controller(self) -> AsyncIncomingWebhooksRestController:
        return AsyncIncomingWebhooksRestController(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAtlassianCompassClient
