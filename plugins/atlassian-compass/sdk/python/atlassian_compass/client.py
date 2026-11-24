from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.attachment_rest_controller import AttachmentRestController
from .apis.entitlement_rest_controller import EntitlementRestController
from .apis.events import Events
from .apis.incoming_webhooks_rest_controller import IncomingWebhooksRestController
from .apis.metrics import Metrics
from .apis.package_dependencies import PackageDependencies
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAtlassianCompassClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    BasicAuthCredentials,
    BasicAuthCredentialsOrDict,
    BasicAuthScheme,
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


class AtlassianCompassClient(BaseAtlassianCompassClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        basic_auth: BasicAuthCredentialsOrDict | None = None,
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
                param[str]("User-Agent", "AtlassianCompassClient/1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            basic_auth=BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth)) if basic_auth is not None else no_auth
        )

    @cached_property
    def events(self) -> Events:
        return Events(self._raw_client, self._server, self._auth)

    @cached_property
    def metrics(self) -> Metrics:
        return Metrics(self._raw_client, self._server, self._auth)

    @cached_property
    def package_dependencies(self) -> PackageDependencies:
        return PackageDependencies(self._raw_client, self._server, self._auth)

    @cached_property
    def attachment_rest_controller(self) -> AttachmentRestController:
        return AttachmentRestController(self._raw_client, self._server, self._auth)

    @cached_property
    def entitlement_rest_controller(self) -> EntitlementRestController:
        return EntitlementRestController(self._raw_client, self._server, self._auth)

    @cached_property
    def incoming_webhooks_rest_controller(self) -> IncomingWebhooksRestController:
        return IncomingWebhooksRestController(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AtlassianCompassClient
