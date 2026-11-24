from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.aws_codebuild_api import AsyncAwsCodebuildApi
from .apis.aws_codebuild_x_amz_target_codebuild import AsyncAwsCodebuildXAmzTargetCodebuild
from .apis.aws_codebuild_x_amz_target_codebuild20161006_deletereport import (
    AsyncAwsCodebuildXAmzTargetCodebuild20161006Deletereport,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_listbuilds import (
    AsyncAwsCodebuildXAmzTargetCodebuild20161006Listbuilds,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_listprojects import (
    AsyncAwsCodebuildXAmzTargetCodebuild20161006Listprojects,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_listreports import (
    AsyncAwsCodebuildXAmzTargetCodebuild20161006Listreports,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_retrybuild import (
    AsyncAwsCodebuildXAmzTargetCodebuild20161006Retrybuild,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_startbuild import (
    AsyncAwsCodebuildXAmzTargetCodebuild20161006Startbuild,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_stopbuild_api import (
    AsyncAwsCodebuildXAmzTargetCodebuild20161006StopbuildApi,
)
from .apis.builds import AsyncBuilds
from .apis.command_execution_api import AsyncCommandExecutionApi
from .apis.fleet_api import AsyncFleetApi
from .apis.projects import AsyncProjects
from .apis.sandboxe import AsyncSandboxe
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAwsCodeBuildClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncAwsCodeBuildClient(BaseAwsCodeBuildClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        sigv4: str | None = None,
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
                param[str]("User-Agent", "AwsCodeBuildClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth
        )

    @cached_property
    def aws_codebuild_api(self) -> AsyncAwsCodebuildApi:
        return AsyncAwsCodebuildApi(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild(self) -> AsyncAwsCodebuildXAmzTargetCodebuild:
        return AsyncAwsCodebuildXAmzTargetCodebuild(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_deletereport(
        self
    ) -> AsyncAwsCodebuildXAmzTargetCodebuild20161006Deletereport:
        return AsyncAwsCodebuildXAmzTargetCodebuild20161006Deletereport(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_listbuilds(
        self
    ) -> AsyncAwsCodebuildXAmzTargetCodebuild20161006Listbuilds:
        return AsyncAwsCodebuildXAmzTargetCodebuild20161006Listbuilds(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_listprojects(
        self
    ) -> AsyncAwsCodebuildXAmzTargetCodebuild20161006Listprojects:
        return AsyncAwsCodebuildXAmzTargetCodebuild20161006Listprojects(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_listreports(
        self
    ) -> AsyncAwsCodebuildXAmzTargetCodebuild20161006Listreports:
        return AsyncAwsCodebuildXAmzTargetCodebuild20161006Listreports(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_retrybuild(
        self
    ) -> AsyncAwsCodebuildXAmzTargetCodebuild20161006Retrybuild:
        return AsyncAwsCodebuildXAmzTargetCodebuild20161006Retrybuild(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_startbuild(
        self
    ) -> AsyncAwsCodebuildXAmzTargetCodebuild20161006Startbuild:
        return AsyncAwsCodebuildXAmzTargetCodebuild20161006Startbuild(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_stopbuild_api(
        self
    ) -> AsyncAwsCodebuildXAmzTargetCodebuild20161006StopbuildApi:
        return AsyncAwsCodebuildXAmzTargetCodebuild20161006StopbuildApi(self._raw_client, self._server, self._auth)

    @cached_property
    def builds(self) -> AsyncBuilds:
        return AsyncBuilds(self._raw_client, self._server, self._auth)

    @cached_property
    def command_execution_api(self) -> AsyncCommandExecutionApi:
        return AsyncCommandExecutionApi(self._raw_client, self._server, self._auth)

    @cached_property
    def fleet_api(self) -> AsyncFleetApi:
        return AsyncFleetApi(self._raw_client, self._server, self._auth)

    @cached_property
    def projects(self) -> AsyncProjects:
        return AsyncProjects(self._raw_client, self._server, self._auth)

    @cached_property
    def sandboxe(self) -> AsyncSandboxe:
        return AsyncSandboxe(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAwsCodeBuildClient
