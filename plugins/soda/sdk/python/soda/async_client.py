from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.attributes import AsyncAttributes
from .apis.checks import AsyncChecks
from .apis.contracts import AsyncContracts
from .apis.data_sources import AsyncDataSources
from .apis.data_standards import AsyncDataStandards
from .apis.datasets import AsyncDatasets
from .apis.discovered_datasets import AsyncDiscoveredDatasets
from .apis.incidents import AsyncIncidents
from .apis.licensing import AsyncLicensing
from .apis.notification_rules import AsyncNotificationRules
from .apis.runners import AsyncRunners
from .apis.scans import AsyncScans
from .apis.secrets import AsyncSecrets
from .apis.users import AsyncUsers
from .apis.utility import AsyncUtility
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseSodaClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyCookieScheme,
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
from .server.environment import Environment


class AsyncSodaClient(BaseSodaClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        basic_auth_api_key: BasicAuthCredentialsOrDict | None = None,
        cookie_token: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            base_url=base_url,
            timeout=timeout,
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
                param[str]("User-Agent", "SodaClient/v1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            basic_auth_api_key=(
                BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth_api_key))
                if basic_auth_api_key is not None
                else no_auth
            ),
            cookie_token=ApiKeyCookieScheme("token", cookie_token) if cookie_token is not None else no_auth,
        )

    @cached_property
    def attributes(self) -> AsyncAttributes:
        return AsyncAttributes(self._raw_client, self._server, self._auth)

    @cached_property
    def checks(self) -> AsyncChecks:
        return AsyncChecks(self._raw_client, self._server, self._auth)

    @cached_property
    def contracts(self) -> AsyncContracts:
        return AsyncContracts(self._raw_client, self._server, self._auth)

    @cached_property
    def data_sources(self) -> AsyncDataSources:
        return AsyncDataSources(self._raw_client, self._server, self._auth)

    @cached_property
    def data_standards(self) -> AsyncDataStandards:
        return AsyncDataStandards(self._raw_client, self._server, self._auth)

    @cached_property
    def datasets(self) -> AsyncDatasets:
        return AsyncDatasets(self._raw_client, self._server, self._auth)

    @cached_property
    def discovered_datasets(self) -> AsyncDiscoveredDatasets:
        return AsyncDiscoveredDatasets(self._raw_client, self._server, self._auth)

    @cached_property
    def incidents(self) -> AsyncIncidents:
        return AsyncIncidents(self._raw_client, self._server, self._auth)

    @cached_property
    def licensing(self) -> AsyncLicensing:
        return AsyncLicensing(self._raw_client, self._server, self._auth)

    @cached_property
    def notification_rules(self) -> AsyncNotificationRules:
        return AsyncNotificationRules(self._raw_client, self._server, self._auth)

    @cached_property
    def runners(self) -> AsyncRunners:
        return AsyncRunners(self._raw_client, self._server, self._auth)

    @cached_property
    def scans(self) -> AsyncScans:
        return AsyncScans(self._raw_client, self._server, self._auth)

    @cached_property
    def secrets(self) -> AsyncSecrets:
        return AsyncSecrets(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> AsyncUsers:
        return AsyncUsers(self._raw_client, self._server, self._auth)

    @cached_property
    def utility(self) -> AsyncUtility:
        return AsyncUtility(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncSodaClient
