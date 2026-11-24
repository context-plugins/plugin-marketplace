from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.aws_step_functions import AsyncAwsStepFunctions
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_createstat import (
    AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat,
)
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_deletestat import (
    AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat,
)
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_describest import (
    AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest,
)
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_liststatem import (
    AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem,
)
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_publishsta import (
    AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta,
)
from .apis.aws_step_functions_x_amz_target_awsstepfunctions_updatestat import (
    AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat,
)
from .apis.operations import AsyncOperations
from .apis.state_machines import AsyncStateMachines
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAwsStepFunctionsClient
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


class AsyncAwsStepFunctionsClient(BaseAwsStepFunctionsClient[AsyncRawClient]):
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
                param[str]("User-Agent", "AwsStepFunctionsClient/0.1.0 Python"),
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
    def aws_step_functions(self) -> AsyncAwsStepFunctions:
        return AsyncAwsStepFunctions(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_createstat(
        self
    ) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat:
        return AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_deletestat(
        self
    ) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat:
        return AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_describest(
        self
    ) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest:
        return AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_liststatem(
        self
    ) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem:
        return AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_publishsta(
        self
    ) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta:
        return AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta(self._raw_client, self._server, self._auth)

    @cached_property
    def aws_step_functions_x_amz_target_awsstepfunctions_updatestat(
        self
    ) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat:
        return AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> AsyncOperations:
        return AsyncOperations(self._raw_client, self._server, self._auth)

    @cached_property
    def state_machines(self) -> AsyncStateMachines:
        return AsyncStateMachines(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAwsStepFunctionsClient
