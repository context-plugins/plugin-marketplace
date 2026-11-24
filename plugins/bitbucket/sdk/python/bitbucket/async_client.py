from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.addon import AsyncAddon
from .apis.branch_restrictions import AsyncBranchRestrictions
from .apis.branching_model_api import AsyncBranchingModelApi
from .apis.commit_statuses import AsyncCommitStatuses
from .apis.commits import AsyncCommits
from .apis.deployments import AsyncDeployments
from .apis.downloads import AsyncDownloads
from .apis.gpg import AsyncGpg
from .apis.issue_tracker import AsyncIssueTracker
from .apis.pipelines import AsyncPipelines
from .apis.projects import AsyncProjects
from .apis.properties import AsyncProperties
from .apis.pull_requests import AsyncPullRequests
from .apis.refs import AsyncRefs
from .apis.reports import AsyncReports
from .apis.repositories import AsyncRepositories
from .apis.search import AsyncSearch
from .apis.snippets import AsyncSnippets
from .apis.source import AsyncSource
from .apis.ssh import AsyncSsh
from .apis.users import AsyncUsers
from .apis.webhooks_api import AsyncWebhooksApi
from .apis.workspaces import AsyncWorkspaces
from .auth import AsyncAuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseBitbucketClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AsyncAuthorizationCodeCredentials,
    AsyncAuthorizationCodeCredentialsOrDict,
    AsyncAuthorizationCodeTokenSource,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncOAuth2RefreshableScheme,
    AsyncRawClient,
    AsyncRefreshableTokenSource,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BasicAuthCredentials,
    BasicAuthCredentialsOrDict,
    BasicAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    client_secret_basic,
    no_auth,
    param,
)
from .server.server_config import ServerConfigOrDict


class AsyncBitbucketClient(BaseBitbucketClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        basic: BasicAuthCredentialsOrDict | None = None,
        oauth2: AsyncAuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: AsyncRefreshableTokenSource[AsyncAuthorizationCodeCredentials[Oauth2Scope]] | None = None,
        api_key: str | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "BitbucketClient/2.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            basic=BasicAuthScheme(BasicAuthCredentials.coerce(basic)) if basic is not None else no_auth,
            oauth2=(
                AsyncOAuth2RefreshableScheme(
                    credentials=AsyncAuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AsyncAuthorizationCodeTokenSource[Oauth2Scope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/authorize"),
                            token_url=self._server.auth_server("/access_token"),
                            refresh_url=self._server.auth_server("/access_token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2 is not None
                else no_auth
            ),
            api_key=ApiKeyHeaderScheme("Authorization", api_key) if api_key is not None else no_auth,
        )

    @cached_property
    def addon(self) -> AsyncAddon:
        return AsyncAddon(self._raw_client, self._server, self._auth)

    @cached_property
    def branch_restrictions(self) -> AsyncBranchRestrictions:
        return AsyncBranchRestrictions(self._raw_client, self._server, self._auth)

    @cached_property
    def branching_model_api(self) -> AsyncBranchingModelApi:
        return AsyncBranchingModelApi(self._raw_client, self._server, self._auth)

    @cached_property
    def commit_statuses(self) -> AsyncCommitStatuses:
        return AsyncCommitStatuses(self._raw_client, self._server, self._auth)

    @cached_property
    def commits(self) -> AsyncCommits:
        return AsyncCommits(self._raw_client, self._server, self._auth)

    @cached_property
    def deployments(self) -> AsyncDeployments:
        return AsyncDeployments(self._raw_client, self._server, self._auth)

    @cached_property
    def downloads(self) -> AsyncDownloads:
        return AsyncDownloads(self._raw_client, self._server, self._auth)

    @cached_property
    def gpg(self) -> AsyncGpg:
        return AsyncGpg(self._raw_client, self._server, self._auth)

    @cached_property
    def issue_tracker(self) -> AsyncIssueTracker:
        return AsyncIssueTracker(self._raw_client, self._server, self._auth)

    @cached_property
    def pipelines(self) -> AsyncPipelines:
        return AsyncPipelines(self._raw_client, self._server, self._auth)

    @cached_property
    def projects(self) -> AsyncProjects:
        return AsyncProjects(self._raw_client, self._server, self._auth)

    @cached_property
    def properties(self) -> AsyncProperties:
        return AsyncProperties(self._raw_client, self._server, self._auth)

    @cached_property
    def pull_requests(self) -> AsyncPullRequests:
        return AsyncPullRequests(self._raw_client, self._server, self._auth)

    @cached_property
    def refs(self) -> AsyncRefs:
        return AsyncRefs(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> AsyncReports:
        return AsyncReports(self._raw_client, self._server, self._auth)

    @cached_property
    def repositories(self) -> AsyncRepositories:
        return AsyncRepositories(self._raw_client, self._server, self._auth)

    @cached_property
    def ssh(self) -> AsyncSsh:
        return AsyncSsh(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> AsyncSearch:
        return AsyncSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def snippets(self) -> AsyncSnippets:
        return AsyncSnippets(self._raw_client, self._server, self._auth)

    @cached_property
    def source(self) -> AsyncSource:
        return AsyncSource(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> AsyncUsers:
        return AsyncUsers(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> AsyncWebhooksApi:
        return AsyncWebhooksApi(self._raw_client, self._server, self._auth)

    @cached_property
    def workspaces(self) -> AsyncWorkspaces:
        return AsyncWorkspaces(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncBitbucketClient
