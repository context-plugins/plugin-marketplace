from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.builds import AsyncBuilds
from .apis.byok_credentials import AsyncByokCredentials
from .apis.checks import AsyncChecks
from .apis.completions import AsyncCompletions
from .apis.data import AsyncData
from .apis.env_vars import AsyncEnvVars
from .apis.imports import AsyncImports
from .apis.inference import AsyncInference
from .apis.instances import AsyncInstances
from .apis.jobs import AsyncJobs
from .apis.limits_api import AsyncLimitsApi
from .apis.member_secrets import AsyncMemberSecrets
from .apis.models_api import AsyncModelsApi
from .apis.o_auth import AsyncOAuth
from .apis.qa import AsyncQa
from .apis.qa_agents import AsyncQaAgents
from .apis.registry_api import AsyncRegistryApi
from .apis.rollouts import AsyncRollouts
from .apis.storage import AsyncStorage
from .apis.tasks import AsyncTasks
from .apis.tasksets import AsyncTasksets
from .apis.teams import AsyncTeams
from .apis.traces import AsyncTraces
from .apis.usage import AsyncUsage
from .base_client import DEFAULT_TIMEOUT, BaseHudClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    param,
)


class AsyncHudClient(BaseHudClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
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
                param[str]("User-Agent", "HudClient/2.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )

    @cached_property
    def builds(self) -> AsyncBuilds:
        return AsyncBuilds(self._raw_client, self._server)

    @cached_property
    def checks(self) -> AsyncChecks:
        return AsyncChecks(self._raw_client, self._server)

    @cached_property
    def completions(self) -> AsyncCompletions:
        return AsyncCompletions(self._raw_client, self._server)

    @cached_property
    def data(self) -> AsyncData:
        return AsyncData(self._raw_client, self._server)

    @cached_property
    def imports(self) -> AsyncImports:
        return AsyncImports(self._raw_client, self._server)

    @cached_property
    def inference(self) -> AsyncInference:
        return AsyncInference(self._raw_client, self._server)

    @cached_property
    def instances(self) -> AsyncInstances:
        return AsyncInstances(self._raw_client, self._server)

    @cached_property
    def jobs(self) -> AsyncJobs:
        return AsyncJobs(self._raw_client, self._server)

    @cached_property
    def limits_api(self) -> AsyncLimitsApi:
        return AsyncLimitsApi(self._raw_client, self._server)

    @cached_property
    def models_api(self) -> AsyncModelsApi:
        return AsyncModelsApi(self._raw_client, self._server)

    @cached_property
    def o_auth(self) -> AsyncOAuth:
        return AsyncOAuth(self._raw_client, self._server)

    @cached_property
    def registry_api(self) -> AsyncRegistryApi:
        return AsyncRegistryApi(self._raw_client, self._server)

    @cached_property
    def storage(self) -> AsyncStorage:
        return AsyncStorage(self._raw_client, self._server)

    @cached_property
    def tasks(self) -> AsyncTasks:
        return AsyncTasks(self._raw_client, self._server)

    @cached_property
    def teams(self) -> AsyncTeams:
        return AsyncTeams(self._raw_client, self._server)

    @cached_property
    def traces(self) -> AsyncTraces:
        return AsyncTraces(self._raw_client, self._server)

    @cached_property
    def usage(self) -> AsyncUsage:
        return AsyncUsage(self._raw_client, self._server)

    @cached_property
    def byok_credentials(self) -> AsyncByokCredentials:
        return AsyncByokCredentials(self._raw_client, self._server)

    @cached_property
    def env_vars(self) -> AsyncEnvVars:
        return AsyncEnvVars(self._raw_client, self._server)

    @cached_property
    def member_secrets(self) -> AsyncMemberSecrets:
        return AsyncMemberSecrets(self._raw_client, self._server)

    @cached_property
    def qa(self) -> AsyncQa:
        return AsyncQa(self._raw_client, self._server)

    @cached_property
    def qa_agents(self) -> AsyncQaAgents:
        return AsyncQaAgents(self._raw_client, self._server)

    @cached_property
    def rollouts(self) -> AsyncRollouts:
        return AsyncRollouts(self._raw_client, self._server)

    @cached_property
    def tasksets(self) -> AsyncTasksets:
        return AsyncTasksets(self._raw_client, self._server)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncHudClient
