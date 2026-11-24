from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.artifact_api import AsyncArtifactApi
from .apis.build_api import AsyncBuildApi
from .apis.context_api import AsyncContextApi
from .apis.insights import AsyncInsights
from .apis.job_api import AsyncJobApi
from .apis.pipeline_api import AsyncPipelineApi
from .apis.project_api import AsyncProjectApi
from .apis.resource_class_api import AsyncResourceClassApi
from .apis.runner_api import AsyncRunnerApi
from .apis.runner_task import AsyncRunnerTask
from .apis.schedule_api import AsyncScheduleApi
from .apis.ssh_key import AsyncSshKey
from .apis.test_metadata_api import AsyncTestMetadataApi
from .apis.user_api import AsyncUserApi
from .apis.webhook import AsyncWebhook
from .apis.workflow_api import AsyncWorkflowApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCircleCiClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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
from .server.server_config import ServerConfigOrDict


class AsyncCircleCiClient(BaseCircleCiClient[AsyncRawClient]):
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
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
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
        self._auth = AsyncAuthSchemes(
            api_token=ApiKeyHeaderScheme("Circle-Token", api_token) if api_token is not None else no_auth,
            basic_auth=BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth)) if basic_auth is not None else no_auth,
        )

    @cached_property
    def artifact_api(self) -> AsyncArtifactApi:
        return AsyncArtifactApi(self._raw_client, self._server, self._auth)

    @cached_property
    def build_api(self) -> AsyncBuildApi:
        return AsyncBuildApi(self._raw_client, self._server, self._auth)

    @cached_property
    def context_api(self) -> AsyncContextApi:
        return AsyncContextApi(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> AsyncInsights:
        return AsyncInsights(self._raw_client, self._server, self._auth)

    @cached_property
    def job_api(self) -> AsyncJobApi:
        return AsyncJobApi(self._raw_client, self._server, self._auth)

    @cached_property
    def pipeline_api(self) -> AsyncPipelineApi:
        return AsyncPipelineApi(self._raw_client, self._server, self._auth)

    @cached_property
    def project_api(self) -> AsyncProjectApi:
        return AsyncProjectApi(self._raw_client, self._server, self._auth)

    @cached_property
    def resource_class_api(self) -> AsyncResourceClassApi:
        return AsyncResourceClassApi(self._raw_client, self._server, self._auth)

    @cached_property
    def runner_api(self) -> AsyncRunnerApi:
        return AsyncRunnerApi(self._raw_client, self._server, self._auth)

    @cached_property
    def runner_task(self) -> AsyncRunnerTask:
        return AsyncRunnerTask(self._raw_client, self._server, self._auth)

    @cached_property
    def ssh_key(self) -> AsyncSshKey:
        return AsyncSshKey(self._raw_client, self._server, self._auth)

    @cached_property
    def schedule_api(self) -> AsyncScheduleApi:
        return AsyncScheduleApi(self._raw_client, self._server, self._auth)

    @cached_property
    def test_metadata_api(self) -> AsyncTestMetadataApi:
        return AsyncTestMetadataApi(self._raw_client, self._server, self._auth)

    @cached_property
    def user_api(self) -> AsyncUserApi:
        return AsyncUserApi(self._raw_client, self._server, self._auth)

    @cached_property
    def webhook(self) -> AsyncWebhook:
        return AsyncWebhook(self._raw_client, self._server, self._auth)

    @cached_property
    def workflow_api(self) -> AsyncWorkflowApi:
        return AsyncWorkflowApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncCircleCiClient
