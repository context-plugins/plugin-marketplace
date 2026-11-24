from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.addon import Addon
from .apis.branch_restrictions import BranchRestrictions
from .apis.branching_model_api import BranchingModelApi
from .apis.commit_statuses import CommitStatuses
from .apis.commits import Commits
from .apis.deployments import Deployments
from .apis.downloads import Downloads
from .apis.gpg import Gpg
from .apis.issue_tracker import IssueTracker
from .apis.pipelines import Pipelines
from .apis.projects import Projects
from .apis.properties import Properties
from .apis.pull_requests import PullRequests
from .apis.refs import Refs
from .apis.reports import Reports
from .apis.repositories import Repositories
from .apis.search import Search
from .apis.snippets import Snippets
from .apis.source import Source
from .apis.ssh import Ssh
from .apis.users import Users
from .apis.webhooks_api import WebhooksApi
from .apis.workspaces import Workspaces
from .auth import AuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseBitbucketClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AuthorizationCodeCredentials,
    AuthorizationCodeCredentialsOrDict,
    AuthorizationCodeTokenSource,
    BasicAuthCredentials,
    BasicAuthCredentialsOrDict,
    BasicAuthScheme,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    OAuth2RefreshableScheme,
    RawClient,
    RefreshableTokenSource,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    client_secret_basic,
    no_auth,
    param,
)
from .server.server_config import ServerConfigOrDict


class BitbucketClient(BaseBitbucketClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        basic: BasicAuthCredentialsOrDict | None = None,
        oauth2: AuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: RefreshableTokenSource[AuthorizationCodeCredentials[Oauth2Scope]] | None = None,
        api_key: str | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(
            basic=BasicAuthScheme(BasicAuthCredentials.coerce(basic)) if basic is not None else no_auth,
            oauth2=(
                OAuth2RefreshableScheme(
                    credentials=AuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AuthorizationCodeTokenSource[Oauth2Scope](
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
    def addon(self) -> Addon:
        return Addon(self._raw_client, self._server, self._auth)

    @cached_property
    def branch_restrictions(self) -> BranchRestrictions:
        return BranchRestrictions(self._raw_client, self._server, self._auth)

    @cached_property
    def branching_model_api(self) -> BranchingModelApi:
        return BranchingModelApi(self._raw_client, self._server, self._auth)

    @cached_property
    def commit_statuses(self) -> CommitStatuses:
        return CommitStatuses(self._raw_client, self._server, self._auth)

    @cached_property
    def commits(self) -> Commits:
        return Commits(self._raw_client, self._server, self._auth)

    @cached_property
    def deployments(self) -> Deployments:
        return Deployments(self._raw_client, self._server, self._auth)

    @cached_property
    def downloads(self) -> Downloads:
        return Downloads(self._raw_client, self._server, self._auth)

    @cached_property
    def gpg(self) -> Gpg:
        return Gpg(self._raw_client, self._server, self._auth)

    @cached_property
    def issue_tracker(self) -> IssueTracker:
        return IssueTracker(self._raw_client, self._server, self._auth)

    @cached_property
    def pipelines(self) -> Pipelines:
        return Pipelines(self._raw_client, self._server, self._auth)

    @cached_property
    def projects(self) -> Projects:
        return Projects(self._raw_client, self._server, self._auth)

    @cached_property
    def properties(self) -> Properties:
        return Properties(self._raw_client, self._server, self._auth)

    @cached_property
    def pull_requests(self) -> PullRequests:
        return PullRequests(self._raw_client, self._server, self._auth)

    @cached_property
    def refs(self) -> Refs:
        return Refs(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> Reports:
        return Reports(self._raw_client, self._server, self._auth)

    @cached_property
    def repositories(self) -> Repositories:
        return Repositories(self._raw_client, self._server, self._auth)

    @cached_property
    def ssh(self) -> Ssh:
        return Ssh(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> Search:
        return Search(self._raw_client, self._server, self._auth)

    @cached_property
    def snippets(self) -> Snippets:
        return Snippets(self._raw_client, self._server, self._auth)

    @cached_property
    def source(self) -> Source:
        return Source(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> Users:
        return Users(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> WebhooksApi:
        return WebhooksApi(self._raw_client, self._server, self._auth)

    @cached_property
    def workspaces(self) -> Workspaces:
        return Workspaces(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = BitbucketClient
