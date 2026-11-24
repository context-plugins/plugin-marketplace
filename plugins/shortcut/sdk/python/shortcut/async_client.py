from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.categories import AsyncCategories
from .apis.custom_fields import AsyncCustomFields
from .apis.documents import AsyncDocuments
from .apis.entity_templates import AsyncEntityTemplates
from .apis.epic_workflow_api import AsyncEpicWorkflowApi
from .apis.epics import AsyncEpics
from .apis.external_link import AsyncExternalLink
from .apis.files import AsyncFiles
from .apis.groups import AsyncGroups
from .apis.health_api import AsyncHealthApi
from .apis.integrations import AsyncIntegrations
from .apis.iterations import AsyncIterations
from .apis.key_results import AsyncKeyResults
from .apis.labels import AsyncLabels
from .apis.linked_files import AsyncLinkedFiles
from .apis.member_api import AsyncMemberApi
from .apis.members import AsyncMembers
from .apis.milestones import AsyncMilestones
from .apis.objectives import AsyncObjectives
from .apis.projects import AsyncProjects
from .apis.repositories import AsyncRepositories
from .apis.search import AsyncSearch
from .apis.stories import AsyncStories
from .apis.story_links import AsyncStoryLinks
from .apis.workflows import AsyncWorkflows
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseShortcutClient
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


class AsyncShortcutClient(BaseShortcutClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_token: str | None = None,
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
                param[str]("User-Agent", "ShortcutClient/3.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "3.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_token=ApiKeyHeaderScheme("Shortcut-Token", api_token) if api_token is not None else no_auth
        )

    @cached_property
    def categories(self) -> AsyncCategories:
        return AsyncCategories(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_fields(self) -> AsyncCustomFields:
        return AsyncCustomFields(self._raw_client, self._server, self._auth)

    @cached_property
    def documents(self) -> AsyncDocuments:
        return AsyncDocuments(self._raw_client, self._server, self._auth)

    @cached_property
    def entity_templates(self) -> AsyncEntityTemplates:
        return AsyncEntityTemplates(self._raw_client, self._server, self._auth)

    @cached_property
    def epic_workflow_api(self) -> AsyncEpicWorkflowApi:
        return AsyncEpicWorkflowApi(self._raw_client, self._server, self._auth)

    @cached_property
    def epics(self) -> AsyncEpics:
        return AsyncEpics(self._raw_client, self._server, self._auth)

    @cached_property
    def external_link(self) -> AsyncExternalLink:
        return AsyncExternalLink(self._raw_client, self._server, self._auth)

    @cached_property
    def files(self) -> AsyncFiles:
        return AsyncFiles(self._raw_client, self._server, self._auth)

    @cached_property
    def groups(self) -> AsyncGroups:
        return AsyncGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def health_api(self) -> AsyncHealthApi:
        return AsyncHealthApi(self._raw_client, self._server, self._auth)

    @cached_property
    def integrations(self) -> AsyncIntegrations:
        return AsyncIntegrations(self._raw_client, self._server, self._auth)

    @cached_property
    def iterations(self) -> AsyncIterations:
        return AsyncIterations(self._raw_client, self._server, self._auth)

    @cached_property
    def key_results(self) -> AsyncKeyResults:
        return AsyncKeyResults(self._raw_client, self._server, self._auth)

    @cached_property
    def labels(self) -> AsyncLabels:
        return AsyncLabels(self._raw_client, self._server, self._auth)

    @cached_property
    def linked_files(self) -> AsyncLinkedFiles:
        return AsyncLinkedFiles(self._raw_client, self._server, self._auth)

    @cached_property
    def member_api(self) -> AsyncMemberApi:
        return AsyncMemberApi(self._raw_client, self._server, self._auth)

    @cached_property
    def members(self) -> AsyncMembers:
        return AsyncMembers(self._raw_client, self._server, self._auth)

    @cached_property
    def milestones(self) -> AsyncMilestones:
        return AsyncMilestones(self._raw_client, self._server, self._auth)

    @cached_property
    def objectives(self) -> AsyncObjectives:
        return AsyncObjectives(self._raw_client, self._server, self._auth)

    @cached_property
    def projects(self) -> AsyncProjects:
        return AsyncProjects(self._raw_client, self._server, self._auth)

    @cached_property
    def repositories(self) -> AsyncRepositories:
        return AsyncRepositories(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> AsyncSearch:
        return AsyncSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def stories(self) -> AsyncStories:
        return AsyncStories(self._raw_client, self._server, self._auth)

    @cached_property
    def story_links(self) -> AsyncStoryLinks:
        return AsyncStoryLinks(self._raw_client, self._server, self._auth)

    @cached_property
    def workflows(self) -> AsyncWorkflows:
        return AsyncWorkflows(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncShortcutClient
