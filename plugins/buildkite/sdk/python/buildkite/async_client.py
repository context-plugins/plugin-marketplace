from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.access_token import AsyncAccessToken
from .apis.agent_tokens import AsyncAgentTokens
from .apis.agents_api import AsyncAgentsApi
from .apis.annotations import AsyncAnnotations
from .apis.artifacts import AsyncArtifacts
from .apis.builds import AsyncBuilds
from .apis.clusters import AsyncClusters
from .apis.emojis import AsyncEmojis
from .apis.jobs_api import AsyncJobsApi
from .apis.meta import AsyncMeta
from .apis.metrics import AsyncMetrics
from .apis.organizations import AsyncOrganizations
from .apis.pipeline_templates import AsyncPipelineTemplates
from .apis.pipelines import AsyncPipelines
from .apis.queues import AsyncQueues
from .apis.rules import AsyncRules
from .apis.stacks import AsyncStacks
from .apis.teams import AsyncTeams
from .apis.user_api import AsyncUserApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBuildkiteClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
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


class AsyncBuildkiteClient(BaseBuildkiteClient[AsyncRawClient]):
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
                param[str]("User-Agent", "BuildkiteClient/v2 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v2"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def access_token(self) -> AsyncAccessToken:
        return AsyncAccessToken(self._raw_client, self._server, self._auth)

    @cached_property
    def agent_tokens(self) -> AsyncAgentTokens:
        return AsyncAgentTokens(self._raw_client, self._server, self._auth)

    @cached_property
    def agents_api(self) -> AsyncAgentsApi:
        return AsyncAgentsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def annotations(self) -> AsyncAnnotations:
        return AsyncAnnotations(self._raw_client, self._server, self._auth)

    @cached_property
    def artifacts(self) -> AsyncArtifacts:
        return AsyncArtifacts(self._raw_client, self._server, self._auth)

    @cached_property
    def builds(self) -> AsyncBuilds:
        return AsyncBuilds(self._raw_client, self._server, self._auth)

    @cached_property
    def clusters(self) -> AsyncClusters:
        return AsyncClusters(self._raw_client, self._server, self._auth)

    @cached_property
    def emojis(self) -> AsyncEmojis:
        return AsyncEmojis(self._raw_client, self._server, self._auth)

    @cached_property
    def jobs_api(self) -> AsyncJobsApi:
        return AsyncJobsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def meta(self) -> AsyncMeta:
        return AsyncMeta(self._raw_client, self._server, self._auth)

    @cached_property
    def metrics(self) -> AsyncMetrics:
        return AsyncMetrics(self._raw_client, self._server, self._auth)

    @cached_property
    def organizations(self) -> AsyncOrganizations:
        return AsyncOrganizations(self._raw_client, self._server, self._auth)

    @cached_property
    def pipeline_templates(self) -> AsyncPipelineTemplates:
        return AsyncPipelineTemplates(self._raw_client, self._server, self._auth)

    @cached_property
    def pipelines(self) -> AsyncPipelines:
        return AsyncPipelines(self._raw_client, self._server, self._auth)

    @cached_property
    def queues(self) -> AsyncQueues:
        return AsyncQueues(self._raw_client, self._server, self._auth)

    @cached_property
    def rules(self) -> AsyncRules:
        return AsyncRules(self._raw_client, self._server, self._auth)

    @cached_property
    def stacks(self) -> AsyncStacks:
        return AsyncStacks(self._raw_client, self._server, self._auth)

    @cached_property
    def teams(self) -> AsyncTeams:
        return AsyncTeams(self._raw_client, self._server, self._auth)

    @cached_property
    def user_api(self) -> AsyncUserApi:
        return AsyncUserApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncBuildkiteClient
