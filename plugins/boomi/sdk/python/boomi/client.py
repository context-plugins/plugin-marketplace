from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.atoms import Atoms
from .apis.components import Components
from .apis.deployments import Deployments
from .apis.environments import Environments
from .apis.execution import Execution
from .apis.golden_records import GoldenRecords
from .apis.messages import Messages
from .apis.models_api import ModelsApi
from .apis.processes import Processes
from .apis.quarantine import Quarantine
from .apis.repositories import Repositories
from .apis.sources import Sources
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBoomiClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    BasicAuthCredentials,
    BasicAuthCredentialsOrDict,
    BasicAuthScheme,
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
from .server.server_config import ServerConfigOrDict


class BoomiClient(BaseBoomiClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        basic_auth: BasicAuthCredentialsOrDict | None = None,
        bearer_auth: str | None = None,
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
                param[str]("User-Agent", "BoomiClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            basic_auth=BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth)) if basic_auth is not None else no_auth,
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
        )

    @cached_property
    def atoms(self) -> Atoms:
        return Atoms(self._raw_client, self._server, self._auth)

    @cached_property
    def components(self) -> Components:
        return Components(self._raw_client, self._server, self._auth)

    @cached_property
    def deployments(self) -> Deployments:
        return Deployments(self._raw_client, self._server, self._auth)

    @cached_property
    def environments(self) -> Environments:
        return Environments(self._raw_client, self._server, self._auth)

    @cached_property
    def execution(self) -> Execution:
        return Execution(self._raw_client, self._server, self._auth)

    @cached_property
    def golden_records(self) -> GoldenRecords:
        return GoldenRecords(self._raw_client, self._server, self._auth)

    @cached_property
    def messages(self) -> Messages:
        return Messages(self._raw_client, self._server, self._auth)

    @cached_property
    def models_api(self) -> ModelsApi:
        return ModelsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def processes(self) -> Processes:
        return Processes(self._raw_client, self._server, self._auth)

    @cached_property
    def quarantine(self) -> Quarantine:
        return Quarantine(self._raw_client, self._server, self._auth)

    @cached_property
    def repositories(self) -> Repositories:
        return Repositories(self._raw_client, self._server, self._auth)

    @cached_property
    def sources(self) -> Sources:
        return Sources(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = BoomiClient
