from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.aws_step_functions import AwsStepFunctions
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_createstat import (
    AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat,
)
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_deletestat import (
    AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat,
)
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_describest import (
    AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest,
)
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_liststatem import (
    AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem,
)
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_publishsta import (
    AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta,
)
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_updatestat import (
    AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat,
)
from .apis.operations import Operations
from .apis.state_machines import StateMachines
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAwsStepFunctionsClient
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


class AwsStepFunctionsClient(BaseAwsStepFunctionsClient[RawClient]):
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
                param[str]("User-Agent", "AwsStepFunctionsClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth)

    @cached_property
    def aws_step_functions(self) -> AwsStepFunctions:
        return AwsStepFunctions(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_createstat(
        self
    ) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat:
        return AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_deletestat(
        self
    ) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat:
        return AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_describest(
        self
    ) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest:
        return AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_liststatem(
        self
    ) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem:
        return AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_publishsta(
        self
    ) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta:
        return AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_updatestat(
        self
    ) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat:
        return AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> Operations:
        return Operations(self._raw_client, self._server, self._auth)

    @cached_property
    def state_machines(self) -> StateMachines:
        return StateMachines(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AwsStepFunctionsClient
