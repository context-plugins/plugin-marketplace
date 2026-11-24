from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.accounts import AsyncAccounts
from .apis.analytics import AsyncAnalytics
from .apis.assets import AsyncAssets
from .apis.attributes import AsyncAttributes
from .apis.audiences import AsyncAudiences
from .apis.audit_logs import AsyncAuditLogs
from .apis.automations import AsyncAutomations
from .apis.brand_kits import AsyncBrandKits
from .apis.content_types import AsyncContentTypes
from .apis.deployments import AsyncDeployments
from .apis.entries import AsyncEntries
from .apis.entry_variants import AsyncEntryVariants
from .apis.environments import AsyncEnvironments
from .apis.events import AsyncEvents
from .apis.execution_logs import AsyncExecutionLogs
from .apis.experiences import AsyncExperiences
from .apis.file_uploads import AsyncFileUploads
from .apis.geolocation import AsyncGeolocation
from .apis.global_fields import AsyncGlobalFields
from .apis.llm_configuration import AsyncLlmConfiguration
from .apis.manifest_api import AsyncManifestApi
from .apis.organizations import AsyncOrganizations
from .apis.projects import AsyncProjects
from .apis.scim_groups import AsyncScimGroups
from .apis.scim_schema_discovery import AsyncScimSchemaDiscovery
from .apis.scim_users import AsyncScimUsers
from .apis.stacks import AsyncStacks
from .apis.synchronization import AsyncSynchronization
from .apis.user_attributes import AsyncUserAttributes
from .apis.user_sessions import AsyncUserSessions
from .apis.users import AsyncUsers
from .apis.variables import AsyncVariables
from .apis.voice_profiles import AsyncVoiceProfiles
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseContentstackClient
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


class AsyncContentstackClient(BaseContentstackClient[AsyncRawClient]):
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
        authtoken_auth: str | None = None,
        api_key: str | None = None,
        delivery_token: str | None = None,
        management_token_auth: str | None = None,
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
                param[str]("User-Agent", "ContentstackClient/v1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
            authtoken_auth=ApiKeyHeaderScheme("authtoken", authtoken_auth) if authtoken_auth is not None else no_auth,
            api_key=ApiKeyHeaderScheme("api_key", api_key) if api_key is not None else no_auth,
            delivery_token=(
                ApiKeyHeaderScheme("access_token", delivery_token) if delivery_token is not None else no_auth
            ),
            management_token_auth=(
                ApiKeyHeaderScheme("authorization", management_token_auth)
                if management_token_auth is not None
                else no_auth
            ),
        )

    @cached_property
    def scim_users(self) -> AsyncScimUsers:
        return AsyncScimUsers(self._raw_client, self._server, self._auth)

    @cached_property
    def accounts(self) -> AsyncAccounts:
        return AsyncAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def analytics(self) -> AsyncAnalytics:
        return AsyncAnalytics(self._raw_client, self._server, self._auth)

    @cached_property
    def assets(self) -> AsyncAssets:
        return AsyncAssets(self._raw_client, self._server, self._auth)

    @cached_property
    def attributes(self) -> AsyncAttributes:
        return AsyncAttributes(self._raw_client, self._server, self._auth)

    @cached_property
    def audiences(self) -> AsyncAudiences:
        return AsyncAudiences(self._raw_client, self._server, self._auth)

    @cached_property
    def audit_logs(self) -> AsyncAuditLogs:
        return AsyncAuditLogs(self._raw_client, self._server, self._auth)

    @cached_property
    def automations(self) -> AsyncAutomations:
        return AsyncAutomations(self._raw_client, self._server, self._auth)

    @cached_property
    def brand_kits(self) -> AsyncBrandKits:
        return AsyncBrandKits(self._raw_client, self._server, self._auth)

    @cached_property
    def content_types(self) -> AsyncContentTypes:
        return AsyncContentTypes(self._raw_client, self._server, self._auth)

    @cached_property
    def deployments(self) -> AsyncDeployments:
        return AsyncDeployments(self._raw_client, self._server, self._auth)

    @cached_property
    def entries(self) -> AsyncEntries:
        return AsyncEntries(self._raw_client, self._server, self._auth)

    @cached_property
    def entry_variants(self) -> AsyncEntryVariants:
        return AsyncEntryVariants(self._raw_client, self._server, self._auth)

    @cached_property
    def environments(self) -> AsyncEnvironments:
        return AsyncEnvironments(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> AsyncEvents:
        return AsyncEvents(self._raw_client, self._server)

    @cached_property
    def execution_logs(self) -> AsyncExecutionLogs:
        return AsyncExecutionLogs(self._raw_client, self._server, self._auth)

    @cached_property
    def experiences(self) -> AsyncExperiences:
        return AsyncExperiences(self._raw_client, self._server, self._auth)

    @cached_property
    def file_uploads(self) -> AsyncFileUploads:
        return AsyncFileUploads(self._raw_client, self._server, self._auth)

    @cached_property
    def geolocation(self) -> AsyncGeolocation:
        return AsyncGeolocation(self._raw_client, self._server, self._auth)

    @cached_property
    def global_fields(self) -> AsyncGlobalFields:
        return AsyncGlobalFields(self._raw_client, self._server, self._auth)

    @cached_property
    def llm_configuration(self) -> AsyncLlmConfiguration:
        return AsyncLlmConfiguration(self._raw_client, self._server, self._auth)

    @cached_property
    def manifest_api(self) -> AsyncManifestApi:
        return AsyncManifestApi(self._raw_client, self._server)

    @cached_property
    def organizations(self) -> AsyncOrganizations:
        return AsyncOrganizations(self._raw_client, self._server, self._auth)

    @cached_property
    def projects(self) -> AsyncProjects:
        return AsyncProjects(self._raw_client, self._server, self._auth)

    @cached_property
    def scim_groups(self) -> AsyncScimGroups:
        return AsyncScimGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def scim_schema_discovery(self) -> AsyncScimSchemaDiscovery:
        return AsyncScimSchemaDiscovery(self._raw_client, self._server)

    @cached_property
    def stacks(self) -> AsyncStacks:
        return AsyncStacks(self._raw_client, self._server, self._auth)

    @cached_property
    def synchronization(self) -> AsyncSynchronization:
        return AsyncSynchronization(self._raw_client, self._server, self._auth)

    @cached_property
    def user_attributes(self) -> AsyncUserAttributes:
        return AsyncUserAttributes(self._raw_client, self._server)

    @cached_property
    def user_sessions(self) -> AsyncUserSessions:
        return AsyncUserSessions(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> AsyncUsers:
        return AsyncUsers(self._raw_client, self._server, self._auth)

    @cached_property
    def variables(self) -> AsyncVariables:
        return AsyncVariables(self._raw_client, self._server, self._auth)

    @cached_property
    def voice_profiles(self) -> AsyncVoiceProfiles:
        return AsyncVoiceProfiles(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncContentstackClient
