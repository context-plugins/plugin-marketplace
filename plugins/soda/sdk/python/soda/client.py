from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.attributes import Attributes
from .apis.checks import Checks
from .apis.contracts import Contracts
from .apis.data_sources import DataSources
from .apis.data_standards import DataStandards
from .apis.datasets import Datasets
from .apis.discovered_datasets import DiscoveredDatasets
from .apis.incidents import Incidents
from .apis.licensing import Licensing
from .apis.notification_rules import NotificationRules
from .apis.runners import Runners
from .apis.scans import Scans
from .apis.secrets import Secrets
from .apis.users import Users
from .apis.utility import Utility
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseSodaClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyCookieScheme,
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
from .server.environment import Environment


class SodaClient(BaseSodaClient[RawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
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
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(
            basic_auth_api_key=(
                BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth_api_key))
                if basic_auth_api_key is not None
                else no_auth
            ),
            cookie_token=ApiKeyCookieScheme("token", cookie_token) if cookie_token is not None else no_auth,
        )

    @cached_property
    def attributes(self) -> Attributes:
        return Attributes(self._raw_client, self._server, self._auth)

    @cached_property
    def checks(self) -> Checks:
        return Checks(self._raw_client, self._server, self._auth)

    @cached_property
    def contracts(self) -> Contracts:
        return Contracts(self._raw_client, self._server, self._auth)

    @cached_property
    def data_sources(self) -> DataSources:
        return DataSources(self._raw_client, self._server, self._auth)

    @cached_property
    def data_standards(self) -> DataStandards:
        return DataStandards(self._raw_client, self._server, self._auth)

    @cached_property
    def datasets(self) -> Datasets:
        return Datasets(self._raw_client, self._server, self._auth)

    @cached_property
    def discovered_datasets(self) -> DiscoveredDatasets:
        return DiscoveredDatasets(self._raw_client, self._server, self._auth)

    @cached_property
    def incidents(self) -> Incidents:
        return Incidents(self._raw_client, self._server, self._auth)

    @cached_property
    def licensing(self) -> Licensing:
        return Licensing(self._raw_client, self._server, self._auth)

    @cached_property
    def notification_rules(self) -> NotificationRules:
        return NotificationRules(self._raw_client, self._server, self._auth)

    @cached_property
    def runners(self) -> Runners:
        return Runners(self._raw_client, self._server, self._auth)

    @cached_property
    def scans(self) -> Scans:
        return Scans(self._raw_client, self._server, self._auth)

    @cached_property
    def secrets(self) -> Secrets:
        return Secrets(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> Users:
        return Users(self._raw_client, self._server, self._auth)

    @cached_property
    def utility(self) -> Utility:
        return Utility(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = SodaClient
