from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.alerts import AsyncAlerts
from .apis.app_inventory import AsyncAppInventory
from .apis.assets import AsyncAssets
from .apis.audit_logs import AsyncAuditLogs
from .apis.automations import AsyncAutomations
from .apis.classification import AsyncClassification
from .apis.digitization import AsyncDigitization
from .apis.discovery import AsyncDiscovery
from .apis.entities import AsyncEntities
from .apis.extraction import AsyncExtraction
from .apis.folders import AsyncFolders
from .apis.groups import AsyncGroups
from .apis.jobs import AsyncJobs
from .apis.licenses import AsyncLicenses
from .apis.machines import AsyncMachines
from .apis.packages import AsyncPackages
from .apis.pipeline import AsyncPipeline
from .apis.processes import AsyncProcesses
from .apis.projects import AsyncProjects
from .apis.queue_items import AsyncQueueItems
from .apis.queues import AsyncQueues
from .apis.requirements import AsyncRequirements
from .apis.robots import AsyncRobots
from .apis.roles import AsyncRoles
from .apis.schedules import AsyncSchedules
from .apis.storage_buckets import AsyncStorageBuckets
from .apis.test_cases import AsyncTestCases
from .apis.test_executions import AsyncTestExecutions
from .apis.test_sets import AsyncTestSets
from .apis.users import AsyncUsers
from .apis.validation import AsyncValidation
from .apis.webhooks_api import AsyncWebhooksApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseUiPathClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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


class AsyncUiPathClient(BaseUiPathClient[AsyncRawClient]):
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
        api_key_auth: str | None = None,
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
                param[str]("User-Agent", "UiPathClient/2024.10 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2024.10"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
            api_key_auth=ApiKeyHeaderScheme("Authorization", api_key_auth) if api_key_auth is not None else no_auth,
        )

    @cached_property
    def alerts(self) -> AsyncAlerts:
        return AsyncAlerts(self._raw_client, self._server, self._auth)

    @cached_property
    def app_inventory(self) -> AsyncAppInventory:
        return AsyncAppInventory(self._raw_client, self._server, self._auth)

    @cached_property
    def assets(self) -> AsyncAssets:
        return AsyncAssets(self._raw_client, self._server, self._auth)

    @cached_property
    def audit_logs(self) -> AsyncAuditLogs:
        return AsyncAuditLogs(self._raw_client, self._server, self._auth)

    @cached_property
    def automations(self) -> AsyncAutomations:
        return AsyncAutomations(self._raw_client, self._server, self._auth)

    @cached_property
    def classification(self) -> AsyncClassification:
        return AsyncClassification(self._raw_client, self._server, self._auth)

    @cached_property
    def digitization(self) -> AsyncDigitization:
        return AsyncDigitization(self._raw_client, self._server, self._auth)

    @cached_property
    def discovery(self) -> AsyncDiscovery:
        return AsyncDiscovery(self._raw_client, self._server, self._auth)

    @cached_property
    def entities(self) -> AsyncEntities:
        return AsyncEntities(self._raw_client, self._server, self._auth)

    @cached_property
    def extraction(self) -> AsyncExtraction:
        return AsyncExtraction(self._raw_client, self._server, self._auth)

    @cached_property
    def folders(self) -> AsyncFolders:
        return AsyncFolders(self._raw_client, self._server, self._auth)

    @cached_property
    def groups(self) -> AsyncGroups:
        return AsyncGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def jobs(self) -> AsyncJobs:
        return AsyncJobs(self._raw_client, self._server, self._auth)

    @cached_property
    def licenses(self) -> AsyncLicenses:
        return AsyncLicenses(self._raw_client, self._server, self._auth)

    @cached_property
    def machines(self) -> AsyncMachines:
        return AsyncMachines(self._raw_client, self._server, self._auth)

    @cached_property
    def packages(self) -> AsyncPackages:
        return AsyncPackages(self._raw_client, self._server, self._auth)

    @cached_property
    def pipeline(self) -> AsyncPipeline:
        return AsyncPipeline(self._raw_client, self._server, self._auth)

    @cached_property
    def processes(self) -> AsyncProcesses:
        return AsyncProcesses(self._raw_client, self._server, self._auth)

    @cached_property
    def projects(self) -> AsyncProjects:
        return AsyncProjects(self._raw_client, self._server, self._auth)

    @cached_property
    def queue_items(self) -> AsyncQueueItems:
        return AsyncQueueItems(self._raw_client, self._server, self._auth)

    @cached_property
    def queues(self) -> AsyncQueues:
        return AsyncQueues(self._raw_client, self._server, self._auth)

    @cached_property
    def requirements(self) -> AsyncRequirements:
        return AsyncRequirements(self._raw_client, self._server, self._auth)

    @cached_property
    def robots(self) -> AsyncRobots:
        return AsyncRobots(self._raw_client, self._server, self._auth)

    @cached_property
    def roles(self) -> AsyncRoles:
        return AsyncRoles(self._raw_client, self._server, self._auth)

    @cached_property
    def schedules(self) -> AsyncSchedules:
        return AsyncSchedules(self._raw_client, self._server, self._auth)

    @cached_property
    def storage_buckets(self) -> AsyncStorageBuckets:
        return AsyncStorageBuckets(self._raw_client, self._server, self._auth)

    @cached_property
    def test_cases(self) -> AsyncTestCases:
        return AsyncTestCases(self._raw_client, self._server, self._auth)

    @cached_property
    def test_executions(self) -> AsyncTestExecutions:
        return AsyncTestExecutions(self._raw_client, self._server, self._auth)

    @cached_property
    def test_sets(self) -> AsyncTestSets:
        return AsyncTestSets(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> AsyncUsers:
        return AsyncUsers(self._raw_client, self._server, self._auth)

    @cached_property
    def validation(self) -> AsyncValidation:
        return AsyncValidation(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> AsyncWebhooksApi:
        return AsyncWebhooksApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncUiPathClient
