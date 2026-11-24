from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.artifact_api import ArtifactApi
from .apis.build_api import BuildApi
from .apis.context_api import ContextApi
from .apis.insights import Insights
from .apis.job_api import JobApi
from .apis.pipeline_api import PipelineApi
from .apis.project_api import ProjectApi
from .apis.resource_class_api import ResourceClassApi
from .apis.runner_api import RunnerApi
from .apis.runner_task import RunnerTask
from .apis.schedule_api import ScheduleApi
from .apis.ssh_key import SshKey
from .apis.test_metadata_api import TestMetadataApi
from .apis.user_api import UserApi
from .apis.webhook import Webhook
from .apis.workflow_api import WorkflowApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCircleCiClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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
from .server.server_config import ServerConfigOrDict


class CircleCiClient(BaseCircleCiClient[RawClient]):
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
        api_token: str | None = None,
        basic_auth: BasicAuthCredentialsOrDict | None = None,
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
                param[str]("User-Agent", "CircleCiClient/1.1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_token=ApiKeyHeaderScheme("Circle-Token", api_token) if api_token is not None else no_auth,
            basic_auth=BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth)) if basic_auth is not None else no_auth,
        )

    @cached_property
    def artifact_api(self) -> ArtifactApi:
        return ArtifactApi(self._raw_client, self._server, self._auth)

    @cached_property
    def build_api(self) -> BuildApi:
        return BuildApi(self._raw_client, self._server, self._auth)

    @cached_property
    def context_api(self) -> ContextApi:
        return ContextApi(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> Insights:
        return Insights(self._raw_client, self._server, self._auth)

    @cached_property
    def job_api(self) -> JobApi:
        return JobApi(self._raw_client, self._server, self._auth)

    @cached_property
    def pipeline_api(self) -> PipelineApi:
        return PipelineApi(self._raw_client, self._server, self._auth)

    @cached_property
    def project_api(self) -> ProjectApi:
        return ProjectApi(self._raw_client, self._server, self._auth)

    @cached_property
    def resource_class_api(self) -> ResourceClassApi:
        return ResourceClassApi(self._raw_client, self._server, self._auth)

    @cached_property
    def runner_api(self) -> RunnerApi:
        return RunnerApi(self._raw_client, self._server, self._auth)

    @cached_property
    def runner_task(self) -> RunnerTask:
        return RunnerTask(self._raw_client, self._server, self._auth)

    @cached_property
    def ssh_key(self) -> SshKey:
        return SshKey(self._raw_client, self._server, self._auth)

    @cached_property
    def schedule_api(self) -> ScheduleApi:
        return ScheduleApi(self._raw_client, self._server, self._auth)

    @cached_property
    def test_metadata_api(self) -> TestMetadataApi:
        return TestMetadataApi(self._raw_client, self._server, self._auth)

    @cached_property
    def user_api(self) -> UserApi:
        return UserApi(self._raw_client, self._server, self._auth)

    @cached_property
    def webhook(self) -> Webhook:
        return Webhook(self._raw_client, self._server, self._auth)

    @cached_property
    def workflow_api(self) -> WorkflowApi:
        return WorkflowApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = CircleCiClient
