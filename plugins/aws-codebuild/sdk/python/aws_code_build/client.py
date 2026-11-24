from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.aws_codebuild_api import AwsCodebuildApi
from .apis.aws_codebuild_x_amz_target_codebuild import AwsCodebuildXAmzTargetCodebuild
from .apis.aws_codebuild_x_amz_target_codebuild20161006_deletereport import (
    AwsCodebuildXAmzTargetCodebuild20161006Deletereport,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_listbuilds import (
    AwsCodebuildXAmzTargetCodebuild20161006Listbuilds,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_listprojects import (
    AwsCodebuildXAmzTargetCodebuild20161006Listprojects,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_listreports import (
    AwsCodebuildXAmzTargetCodebuild20161006Listreports,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_retrybuild import (
    AwsCodebuildXAmzTargetCodebuild20161006Retrybuild,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_startbuild import (
    AwsCodebuildXAmzTargetCodebuild20161006Startbuild,
)
from .apis.aws_codebuild_x_amz_target_codebuild20161006_stopbuild_api import (
    AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi,
)
from .apis.builds import Builds
from .apis.command_execution_api import CommandExecutionApi
from .apis.fleet_api import FleetApi
from .apis.projects import Projects
from .apis.sandboxe import Sandboxe
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAwsCodeBuildClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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


class AwsCodeBuildClient(BaseAwsCodeBuildClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        sigv4: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth)

    @cached_property
    def aws_codebuild_api(self) -> AwsCodebuildApi:
        return AwsCodebuildApi(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild(self) -> AwsCodebuildXAmzTargetCodebuild:
        return AwsCodebuildXAmzTargetCodebuild(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_deletereport(
        self
    ) -> AwsCodebuildXAmzTargetCodebuild20161006Deletereport:
        return AwsCodebuildXAmzTargetCodebuild20161006Deletereport(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_listbuilds(
        self
    ) -> AwsCodebuildXAmzTargetCodebuild20161006Listbuilds:
        return AwsCodebuildXAmzTargetCodebuild20161006Listbuilds(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_listprojects(
        self
    ) -> AwsCodebuildXAmzTargetCodebuild20161006Listprojects:
        return AwsCodebuildXAmzTargetCodebuild20161006Listprojects(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_listreports(
        self
    ) -> AwsCodebuildXAmzTargetCodebuild20161006Listreports:
        return AwsCodebuildXAmzTargetCodebuild20161006Listreports(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_retrybuild(
        self
    ) -> AwsCodebuildXAmzTargetCodebuild20161006Retrybuild:
        return AwsCodebuildXAmzTargetCodebuild20161006Retrybuild(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_startbuild(
        self
    ) -> AwsCodebuildXAmzTargetCodebuild20161006Startbuild:
        return AwsCodebuildXAmzTargetCodebuild20161006Startbuild(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_codebuild_x_amz_target_codebuild20161006_stopbuild_api(
        self
    ) -> AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi:
        return AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi(self._raw_client, self._server, self._auth)

    @cached_property
    def builds(self) -> Builds:
        return Builds(self._raw_client, self._server, self._auth)

    @cached_property
    def command_execution_api(self) -> CommandExecutionApi:
        return CommandExecutionApi(self._raw_client, self._server, self._auth)

    @cached_property
    def fleet_api(self) -> FleetApi:
        return FleetApi(self._raw_client, self._server, self._auth)

    @cached_property
    def projects(self) -> Projects:
        return Projects(self._raw_client, self._server, self._auth)

    @cached_property
    def sandboxe(self) -> Sandboxe:
        return Sandboxe(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AwsCodeBuildClient
