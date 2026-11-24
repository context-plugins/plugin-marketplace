from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.builds import Builds
from .apis.byok_credentials import ByokCredentials
from .apis.checks import Checks
from .apis.completions import Completions
from .apis.data import Data
from .apis.env_vars import EnvVars
from .apis.imports import Imports
from .apis.inference import Inference
from .apis.instances import Instances
from .apis.jobs import Jobs
from .apis.limits_api import LimitsApi
from .apis.member_secrets import MemberSecrets
from .apis.models_api import ModelsApi
from .apis.o_auth import OAuth
from .apis.qa import Qa
from .apis.qa_agents import QaAgents
from .apis.registry_api import RegistryApi
from .apis.rollouts import Rollouts
from .apis.storage import Storage
from .apis.tasks import Tasks
from .apis.tasksets import Tasksets
from .apis.teams import Teams
from .apis.traces import Traces
from .apis.usage import Usage
from .base_client import DEFAULT_TIMEOUT, BaseHudClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    param,
)


class HudClient(BaseHudClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
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
                param[str]("User-Agent", "HudClient/2.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )

    @cached_property
    def builds(self) -> Builds:
        return Builds(self._raw_client, self._server)

    @cached_property
    def checks(self) -> Checks:
        return Checks(self._raw_client, self._server)

    @cached_property
    def completions(self) -> Completions:
        return Completions(self._raw_client, self._server)

    @cached_property
    def data(self) -> Data:
        return Data(self._raw_client, self._server)

    @cached_property
    def imports(self) -> Imports:
        return Imports(self._raw_client, self._server)

    @cached_property
    def inference(self) -> Inference:
        return Inference(self._raw_client, self._server)

    @cached_property
    def instances(self) -> Instances:
        return Instances(self._raw_client, self._server)

    @cached_property
    def jobs(self) -> Jobs:
        return Jobs(self._raw_client, self._server)

    @cached_property
    def limits_api(self) -> LimitsApi:
        return LimitsApi(self._raw_client, self._server)

    @cached_property
    def models_api(self) -> ModelsApi:
        return ModelsApi(self._raw_client, self._server)

    @cached_property
    def o_auth(self) -> OAuth:
        return OAuth(self._raw_client, self._server)

    @cached_property
    def registry_api(self) -> RegistryApi:
        return RegistryApi(self._raw_client, self._server)

    @cached_property
    def storage(self) -> Storage:
        return Storage(self._raw_client, self._server)

    @cached_property
    def tasks(self) -> Tasks:
        return Tasks(self._raw_client, self._server)

    @cached_property
    def teams(self) -> Teams:
        return Teams(self._raw_client, self._server)

    @cached_property
    def traces(self) -> Traces:
        return Traces(self._raw_client, self._server)

    @cached_property
    def usage(self) -> Usage:
        return Usage(self._raw_client, self._server)

    @cached_property
    def byok_credentials(self) -> ByokCredentials:
        return ByokCredentials(self._raw_client, self._server)

    @cached_property
    def env_vars(self) -> EnvVars:
        return EnvVars(self._raw_client, self._server)

    @cached_property
    def member_secrets(self) -> MemberSecrets:
        return MemberSecrets(self._raw_client, self._server)

    @cached_property
    def qa(self) -> Qa:
        return Qa(self._raw_client, self._server)

    @cached_property
    def qa_agents(self) -> QaAgents:
        return QaAgents(self._raw_client, self._server)

    @cached_property
    def rollouts(self) -> Rollouts:
        return Rollouts(self._raw_client, self._server)

    @cached_property
    def tasksets(self) -> Tasksets:
        return Tasksets(self._raw_client, self._server)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = HudClient
