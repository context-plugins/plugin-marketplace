from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.accounts import Accounts
from .apis.analytics import Analytics
from .apis.assets import Assets
from .apis.attributes import Attributes
from .apis.audiences import Audiences
from .apis.audit_logs import AuditLogs
from .apis.automations import Automations
from .apis.brand_kits import BrandKits
from .apis.content_types import ContentTypes
from .apis.deployments import Deployments
from .apis.entries import Entries
from .apis.entry_variants import EntryVariants
from .apis.environments import Environments
from .apis.events import Events
from .apis.execution_logs import ExecutionLogs
from .apis.experiences import Experiences
from .apis.file_uploads import FileUploads
from .apis.geolocation import Geolocation
from .apis.global_fields import GlobalFields
from .apis.llm_configuration import LlmConfiguration
from .apis.manifest_api import ManifestApi
from .apis.organizations import Organizations
from .apis.projects import Projects
from .apis.scim_groups import ScimGroups
from .apis.scim_schema_discovery import ScimSchemaDiscovery
from .apis.scim_users import ScimUsers
from .apis.stacks import Stacks
from .apis.synchronization import Synchronization
from .apis.user_attributes import UserAttributes
from .apis.user_sessions import UserSessions
from .apis.users import Users
from .apis.variables import Variables
from .apis.voice_profiles import VoiceProfiles
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseContentstackClient
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


class ContentstackClient(BaseContentstackClient[RawClient]):
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
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(
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
    def scim_users(self) -> ScimUsers:
        return ScimUsers(self._raw_client, self._server, self._auth)

    @cached_property
    def accounts(self) -> Accounts:
        return Accounts(self._raw_client, self._server, self._auth)

    @cached_property
    def analytics(self) -> Analytics:
        return Analytics(self._raw_client, self._server, self._auth)

    @cached_property
    def assets(self) -> Assets:
        return Assets(self._raw_client, self._server, self._auth)

    @cached_property
    def attributes(self) -> Attributes:
        return Attributes(self._raw_client, self._server, self._auth)

    @cached_property
    def audiences(self) -> Audiences:
        return Audiences(self._raw_client, self._server, self._auth)

    @cached_property
    def audit_logs(self) -> AuditLogs:
        return AuditLogs(self._raw_client, self._server, self._auth)

    @cached_property
    def automations(self) -> Automations:
        return Automations(self._raw_client, self._server, self._auth)

    @cached_property
    def brand_kits(self) -> BrandKits:
        return BrandKits(self._raw_client, self._server, self._auth)

    @cached_property
    def content_types(self) -> ContentTypes:
        return ContentTypes(self._raw_client, self._server, self._auth)

    @cached_property
    def deployments(self) -> Deployments:
        return Deployments(self._raw_client, self._server, self._auth)

    @cached_property
    def entries(self) -> Entries:
        return Entries(self._raw_client, self._server, self._auth)

    @cached_property
    def entry_variants(self) -> EntryVariants:
        return EntryVariants(self._raw_client, self._server, self._auth)

    @cached_property
    def environments(self) -> Environments:
        return Environments(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> Events:
        return Events(self._raw_client, self._server)

    @cached_property
    def execution_logs(self) -> ExecutionLogs:
        return ExecutionLogs(self._raw_client, self._server, self._auth)

    @cached_property
    def experiences(self) -> Experiences:
        return Experiences(self._raw_client, self._server, self._auth)

    @cached_property
    def file_uploads(self) -> FileUploads:
        return FileUploads(self._raw_client, self._server, self._auth)

    @cached_property
    def geolocation(self) -> Geolocation:
        return Geolocation(self._raw_client, self._server, self._auth)

    @cached_property
    def global_fields(self) -> GlobalFields:
        return GlobalFields(self._raw_client, self._server, self._auth)

    @cached_property
    def llm_configuration(self) -> LlmConfiguration:
        return LlmConfiguration(self._raw_client, self._server, self._auth)

    @cached_property
    def manifest_api(self) -> ManifestApi:
        return ManifestApi(self._raw_client, self._server)

    @cached_property
    def organizations(self) -> Organizations:
        return Organizations(self._raw_client, self._server, self._auth)

    @cached_property
    def projects(self) -> Projects:
        return Projects(self._raw_client, self._server, self._auth)

    @cached_property
    def scim_groups(self) -> ScimGroups:
        return ScimGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def scim_schema_discovery(self) -> ScimSchemaDiscovery:
        return ScimSchemaDiscovery(self._raw_client, self._server)

    @cached_property
    def stacks(self) -> Stacks:
        return Stacks(self._raw_client, self._server, self._auth)

    @cached_property
    def synchronization(self) -> Synchronization:
        return Synchronization(self._raw_client, self._server, self._auth)

    @cached_property
    def user_attributes(self) -> UserAttributes:
        return UserAttributes(self._raw_client, self._server)

    @cached_property
    def user_sessions(self) -> UserSessions:
        return UserSessions(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> Users:
        return Users(self._raw_client, self._server, self._auth)

    @cached_property
    def variables(self) -> Variables:
        return Variables(self._raw_client, self._server, self._auth)

    @cached_property
    def voice_profiles(self) -> VoiceProfiles:
        return VoiceProfiles(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = ContentstackClient
