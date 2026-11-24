from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.categories import Categories
from .apis.custom_fields import CustomFields
from .apis.documents import Documents
from .apis.entity_templates import EntityTemplates
from .apis.epic_workflow_api import EpicWorkflowApi
from .apis.epics import Epics
from .apis.external_link import ExternalLink
from .apis.files import Files
from .apis.groups import Groups
from .apis.health_api import HealthApi
from .apis.integrations import Integrations
from .apis.iterations import Iterations
from .apis.key_results import KeyResults
from .apis.labels import Labels
from .apis.linked_files import LinkedFiles
from .apis.member_api import MemberApi
from .apis.members import Members
from .apis.milestones import Milestones
from .apis.objectives import Objectives
from .apis.projects import Projects
from .apis.repositories import Repositories
from .apis.search import Search
from .apis.stories import Stories
from .apis.story_links import StoryLinks
from .apis.workflows import Workflows
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseShortcutClient
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


class ShortcutClient(BaseShortcutClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_token: str | None = None,
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
                param[str]("User-Agent", "ShortcutClient/3.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "3.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_token=ApiKeyHeaderScheme("Shortcut-Token", api_token) if api_token is not None else no_auth
        )

    @cached_property
    def categories(self) -> Categories:
        return Categories(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_fields(self) -> CustomFields:
        return CustomFields(self._raw_client, self._server, self._auth)

    @cached_property
    def documents(self) -> Documents:
        return Documents(self._raw_client, self._server, self._auth)

    @cached_property
    def entity_templates(self) -> EntityTemplates:
        return EntityTemplates(self._raw_client, self._server, self._auth)

    @cached_property
    def epic_workflow_api(self) -> EpicWorkflowApi:
        return EpicWorkflowApi(self._raw_client, self._server, self._auth)

    @cached_property
    def epics(self) -> Epics:
        return Epics(self._raw_client, self._server, self._auth)

    @cached_property
    def external_link(self) -> ExternalLink:
        return ExternalLink(self._raw_client, self._server, self._auth)

    @cached_property
    def files(self) -> Files:
        return Files(self._raw_client, self._server, self._auth)

    @cached_property
    def groups(self) -> Groups:
        return Groups(self._raw_client, self._server, self._auth)

    @cached_property
    def health_api(self) -> HealthApi:
        return HealthApi(self._raw_client, self._server, self._auth)

    @cached_property
    def integrations(self) -> Integrations:
        return Integrations(self._raw_client, self._server, self._auth)

    @cached_property
    def iterations(self) -> Iterations:
        return Iterations(self._raw_client, self._server, self._auth)

    @cached_property
    def key_results(self) -> KeyResults:
        return KeyResults(self._raw_client, self._server, self._auth)

    @cached_property
    def labels(self) -> Labels:
        return Labels(self._raw_client, self._server, self._auth)

    @cached_property
    def linked_files(self) -> LinkedFiles:
        return LinkedFiles(self._raw_client, self._server, self._auth)

    @cached_property
    def member_api(self) -> MemberApi:
        return MemberApi(self._raw_client, self._server, self._auth)

    @cached_property
    def members(self) -> Members:
        return Members(self._raw_client, self._server, self._auth)

    @cached_property
    def milestones(self) -> Milestones:
        return Milestones(self._raw_client, self._server, self._auth)

    @cached_property
    def objectives(self) -> Objectives:
        return Objectives(self._raw_client, self._server, self._auth)

    @cached_property
    def projects(self) -> Projects:
        return Projects(self._raw_client, self._server, self._auth)

    @cached_property
    def repositories(self) -> Repositories:
        return Repositories(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> Search:
        return Search(self._raw_client, self._server, self._auth)

    @cached_property
    def stories(self) -> Stories:
        return Stories(self._raw_client, self._server, self._auth)

    @cached_property
    def story_links(self) -> StoryLinks:
        return StoryLinks(self._raw_client, self._server, self._auth)

    @cached_property
    def workflows(self) -> Workflows:
        return Workflows(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = ShortcutClient
