from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.access_token import AccessToken
from .apis.agent_tokens import AgentTokens
from .apis.agents_api import AgentsApi
from .apis.annotations import Annotations
from .apis.artifacts import Artifacts
from .apis.builds import Builds
from .apis.clusters import Clusters
from .apis.emojis import Emojis
from .apis.jobs_api import JobsApi
from .apis.meta import Meta
from .apis.metrics import Metrics
from .apis.organizations import Organizations
from .apis.pipeline_templates import PipelineTemplates
from .apis.pipelines import Pipelines
from .apis.queues import Queues
from .apis.rules import Rules
from .apis.stacks import Stacks
from .apis.teams import Teams
from .apis.user_api import UserApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBuildkiteClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
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


class BuildkiteClient(BaseBuildkiteClient[RawClient]):
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
                param[str]("User-Agent", "BuildkiteClient/v2 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v2"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def access_token(self) -> AccessToken:
        return AccessToken(self._raw_client, self._server, self._auth)

    @cached_property
    def agent_tokens(self) -> AgentTokens:
        return AgentTokens(self._raw_client, self._server, self._auth)

    @cached_property
    def agents_api(self) -> AgentsApi:
        return AgentsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def annotations(self) -> Annotations:
        return Annotations(self._raw_client, self._server, self._auth)

    @cached_property
    def artifacts(self) -> Artifacts:
        return Artifacts(self._raw_client, self._server, self._auth)

    @cached_property
    def builds(self) -> Builds:
        return Builds(self._raw_client, self._server, self._auth)

    @cached_property
    def clusters(self) -> Clusters:
        return Clusters(self._raw_client, self._server, self._auth)

    @cached_property
    def emojis(self) -> Emojis:
        return Emojis(self._raw_client, self._server, self._auth)

    @cached_property
    def jobs_api(self) -> JobsApi:
        return JobsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def meta(self) -> Meta:
        return Meta(self._raw_client, self._server, self._auth)

    @cached_property
    def metrics(self) -> Metrics:
        return Metrics(self._raw_client, self._server, self._auth)

    @cached_property
    def organizations(self) -> Organizations:
        return Organizations(self._raw_client, self._server, self._auth)

    @cached_property
    def pipeline_templates(self) -> PipelineTemplates:
        return PipelineTemplates(self._raw_client, self._server, self._auth)

    @cached_property
    def pipelines(self) -> Pipelines:
        return Pipelines(self._raw_client, self._server, self._auth)

    @cached_property
    def queues(self) -> Queues:
        return Queues(self._raw_client, self._server, self._auth)

    @cached_property
    def rules(self) -> Rules:
        return Rules(self._raw_client, self._server, self._auth)

    @cached_property
    def stacks(self) -> Stacks:
        return Stacks(self._raw_client, self._server, self._auth)

    @cached_property
    def teams(self) -> Teams:
        return Teams(self._raw_client, self._server, self._auth)

    @cached_property
    def user_api(self) -> UserApi:
        return UserApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = BuildkiteClient
