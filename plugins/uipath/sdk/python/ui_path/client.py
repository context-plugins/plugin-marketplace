from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.alerts import Alerts
from .apis.app_inventory import AppInventory
from .apis.assets import Assets
from .apis.audit_logs import AuditLogs
from .apis.automations import Automations
from .apis.classification import Classification
from .apis.digitization import Digitization
from .apis.discovery import Discovery
from .apis.entities import Entities
from .apis.extraction import Extraction
from .apis.folders import Folders
from .apis.groups import Groups
from .apis.jobs import Jobs
from .apis.licenses import Licenses
from .apis.machines import Machines
from .apis.packages import Packages
from .apis.pipeline import Pipeline
from .apis.processes import Processes
from .apis.projects import Projects
from .apis.queue_items import QueueItems
from .apis.queues import Queues
from .apis.requirements import Requirements
from .apis.robots import Robots
from .apis.roles import Roles
from .apis.schedules import Schedules
from .apis.storage_buckets import StorageBuckets
from .apis.test_cases import TestCases
from .apis.test_executions import TestExecutions
from .apis.test_sets import TestSets
from .apis.users import Users
from .apis.validation import Validation
from .apis.webhooks_api import WebhooksApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseUiPathClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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


class UiPathClient(BaseUiPathClient[RawClient]):
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
        api_key_auth: str | None = None,
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
                param[str]("User-Agent", "UiPathClient/2024.10 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2024.10"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
            api_key_auth=ApiKeyHeaderScheme("Authorization", api_key_auth) if api_key_auth is not None else no_auth,
        )

    @cached_property
    def alerts(self) -> Alerts:
        return Alerts(self._raw_client, self._server, self._auth)

    @cached_property
    def app_inventory(self) -> AppInventory:
        return AppInventory(self._raw_client, self._server, self._auth)

    @cached_property
    def assets(self) -> Assets:
        return Assets(self._raw_client, self._server, self._auth)

    @cached_property
    def audit_logs(self) -> AuditLogs:
        return AuditLogs(self._raw_client, self._server, self._auth)

    @cached_property
    def automations(self) -> Automations:
        return Automations(self._raw_client, self._server, self._auth)

    @cached_property
    def classification(self) -> Classification:
        return Classification(self._raw_client, self._server, self._auth)

    @cached_property
    def digitization(self) -> Digitization:
        return Digitization(self._raw_client, self._server, self._auth)

    @cached_property
    def discovery(self) -> Discovery:
        return Discovery(self._raw_client, self._server, self._auth)

    @cached_property
    def entities(self) -> Entities:
        return Entities(self._raw_client, self._server, self._auth)

    @cached_property
    def extraction(self) -> Extraction:
        return Extraction(self._raw_client, self._server, self._auth)

    @cached_property
    def folders(self) -> Folders:
        return Folders(self._raw_client, self._server, self._auth)

    @cached_property
    def groups(self) -> Groups:
        return Groups(self._raw_client, self._server, self._auth)

    @cached_property
    def jobs(self) -> Jobs:
        return Jobs(self._raw_client, self._server, self._auth)

    @cached_property
    def licenses(self) -> Licenses:
        return Licenses(self._raw_client, self._server, self._auth)

    @cached_property
    def machines(self) -> Machines:
        return Machines(self._raw_client, self._server, self._auth)

    @cached_property
    def packages(self) -> Packages:
        return Packages(self._raw_client, self._server, self._auth)

    @cached_property
    def pipeline(self) -> Pipeline:
        return Pipeline(self._raw_client, self._server, self._auth)

    @cached_property
    def processes(self) -> Processes:
        return Processes(self._raw_client, self._server, self._auth)

    @cached_property
    def projects(self) -> Projects:
        return Projects(self._raw_client, self._server, self._auth)

    @cached_property
    def queue_items(self) -> QueueItems:
        return QueueItems(self._raw_client, self._server, self._auth)

    @cached_property
    def queues(self) -> Queues:
        return Queues(self._raw_client, self._server, self._auth)

    @cached_property
    def requirements(self) -> Requirements:
        return Requirements(self._raw_client, self._server, self._auth)

    @cached_property
    def robots(self) -> Robots:
        return Robots(self._raw_client, self._server, self._auth)

    @cached_property
    def roles(self) -> Roles:
        return Roles(self._raw_client, self._server, self._auth)

    @cached_property
    def schedules(self) -> Schedules:
        return Schedules(self._raw_client, self._server, self._auth)

    @cached_property
    def storage_buckets(self) -> StorageBuckets:
        return StorageBuckets(self._raw_client, self._server, self._auth)

    @cached_property
    def test_cases(self) -> TestCases:
        return TestCases(self._raw_client, self._server, self._auth)

    @cached_property
    def test_executions(self) -> TestExecutions:
        return TestExecutions(self._raw_client, self._server, self._auth)

    @cached_property
    def test_sets(self) -> TestSets:
        return TestSets(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> Users:
        return Users(self._raw_client, self._server, self._auth)

    @cached_property
    def validation(self) -> Validation:
        return Validation(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> WebhooksApi:
        return WebhooksApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = UiPathClient
