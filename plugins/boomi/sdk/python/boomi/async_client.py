from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.atoms import AsyncAtoms
from .apis.components import AsyncComponents
from .apis.deployments import AsyncDeployments
from .apis.environments import AsyncEnvironments
from .apis.execution import AsyncExecution
from .apis.golden_records import AsyncGoldenRecords
from .apis.messages import AsyncMessages
from .apis.models_api import AsyncModelsApi
from .apis.processes import AsyncProcesses
from .apis.quarantine import AsyncQuarantine
from .apis.repositories import AsyncRepositories
from .apis.sources import AsyncSources
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBoomiClient
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
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)
from .server.server_config import ServerConfigOrDict


class AsyncBoomiClient(BaseBoomiClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        basic_auth: BasicAuthCredentialsOrDict | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "BoomiClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            basic_auth=BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth)) if basic_auth is not None else no_auth,
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
        )

    @cached_property
    def atoms(self) -> AsyncAtoms:
        return AsyncAtoms(self._raw_client, self._server, self._auth)

    @cached_property
    def components(self) -> AsyncComponents:
        return AsyncComponents(self._raw_client, self._server, self._auth)

    @cached_property
    def deployments(self) -> AsyncDeployments:
        return AsyncDeployments(self._raw_client, self._server, self._auth)

    @cached_property
    def environments(self) -> AsyncEnvironments:
        return AsyncEnvironments(self._raw_client, self._server, self._auth)

    @cached_property
    def execution(self) -> AsyncExecution:
        return AsyncExecution(self._raw_client, self._server, self._auth)

    @cached_property
    def golden_records(self) -> AsyncGoldenRecords:
        return AsyncGoldenRecords(self._raw_client, self._server, self._auth)

    @cached_property
    def messages(self) -> AsyncMessages:
        return AsyncMessages(self._raw_client, self._server, self._auth)

    @cached_property
    def models_api(self) -> AsyncModelsApi:
        return AsyncModelsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def processes(self) -> AsyncProcesses:
        return AsyncProcesses(self._raw_client, self._server, self._auth)

    @cached_property
    def quarantine(self) -> AsyncQuarantine:
        return AsyncQuarantine(self._raw_client, self._server, self._auth)

    @cached_property
    def repositories(self) -> AsyncRepositories:
        return AsyncRepositories(self._raw_client, self._server, self._auth)

    @cached_property
    def sources(self) -> AsyncSources:
        return AsyncSources(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncBoomiClient
