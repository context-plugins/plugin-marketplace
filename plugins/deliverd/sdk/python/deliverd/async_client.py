from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.actions import AsyncActions
from .apis.agents import AsyncAgents
from .apis.ai_systems import AsyncAiSystems
from .apis.analytics import AsyncAnalytics
from .apis.approvals import AsyncApprovals
from .apis.audiences import AsyncAudiences
from .apis.audit_events import AsyncAuditEvents
from .apis.collections import AsyncCollections
from .apis.comments import AsyncComments
from .apis.decision_sessions import AsyncDecisionSessions
from .apis.drafts import AsyncDrafts
from .apis.evidence import AsyncEvidence
from .apis.flows import AsyncFlows
from .apis.gates import AsyncGates
from .apis.governance_api import AsyncGovernanceApi
from .apis.knowledge import AsyncKnowledge
from .apis.playbooks import AsyncPlaybooks
from .apis.policies import AsyncPolicies
from .apis.reports import AsyncReports
from .apis.reviews import AsyncReviews
from .apis.risk_indicators import AsyncRiskIndicators
from .apis.schedules import AsyncSchedules
from .apis.screen import AsyncScreen
from .apis.tasks import AsyncTasks
from .apis.templates import AsyncTemplates
from .apis.uploads import AsyncUploads
from .apis.webhook_endpoints import AsyncWebhookEndpoints
from .apis.workspaces import AsyncWorkspaces
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseDeliverdClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
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


class AsyncDeliverdClient(BaseDeliverdClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth: str | None = None,
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
                param[str]("User-Agent", "DeliverdClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def actions(self) -> AsyncActions:
        return AsyncActions(self._raw_client, self._server, self._auth)

    @cached_property
    def agents(self) -> AsyncAgents:
        return AsyncAgents(self._raw_client, self._server, self._auth)

    @cached_property
    def ai_systems(self) -> AsyncAiSystems:
        return AsyncAiSystems(self._raw_client, self._server, self._auth)

    @cached_property
    def analytics(self) -> AsyncAnalytics:
        return AsyncAnalytics(self._raw_client, self._server, self._auth)

    @cached_property
    def approvals(self) -> AsyncApprovals:
        return AsyncApprovals(self._raw_client, self._server, self._auth)

    @cached_property
    def audiences(self) -> AsyncAudiences:
        return AsyncAudiences(self._raw_client, self._server, self._auth)

    @cached_property
    def audit_events(self) -> AsyncAuditEvents:
        return AsyncAuditEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def collections(self) -> AsyncCollections:
        return AsyncCollections(self._raw_client, self._server, self._auth)

    @cached_property
    def comments(self) -> AsyncComments:
        return AsyncComments(self._raw_client, self._server, self._auth)

    @cached_property
    def decision_sessions(self) -> AsyncDecisionSessions:
        return AsyncDecisionSessions(self._raw_client, self._server, self._auth)

    @cached_property
    def drafts(self) -> AsyncDrafts:
        return AsyncDrafts(self._raw_client, self._server)

    @cached_property
    def evidence(self) -> AsyncEvidence:
        return AsyncEvidence(self._raw_client, self._server)

    @cached_property
    def flows(self) -> AsyncFlows:
        return AsyncFlows(self._raw_client, self._server, self._auth)

    @cached_property
    def gates(self) -> AsyncGates:
        return AsyncGates(self._raw_client, self._server, self._auth)

    @cached_property
    def governance_api(self) -> AsyncGovernanceApi:
        return AsyncGovernanceApi(self._raw_client, self._server, self._auth)

    @cached_property
    def knowledge(self) -> AsyncKnowledge:
        return AsyncKnowledge(self._raw_client, self._server, self._auth)

    @cached_property
    def playbooks(self) -> AsyncPlaybooks:
        return AsyncPlaybooks(self._raw_client, self._server, self._auth)

    @cached_property
    def policies(self) -> AsyncPolicies:
        return AsyncPolicies(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> AsyncReports:
        return AsyncReports(self._raw_client, self._server, self._auth)

    @cached_property
    def reviews(self) -> AsyncReviews:
        return AsyncReviews(self._raw_client, self._server, self._auth)

    @cached_property
    def risk_indicators(self) -> AsyncRiskIndicators:
        return AsyncRiskIndicators(self._raw_client, self._server, self._auth)

    @cached_property
    def schedules(self) -> AsyncSchedules:
        return AsyncSchedules(self._raw_client, self._server, self._auth)

    @cached_property
    def screen(self) -> AsyncScreen:
        return AsyncScreen(self._raw_client, self._server, self._auth)

    @cached_property
    def tasks(self) -> AsyncTasks:
        return AsyncTasks(self._raw_client, self._server, self._auth)

    @cached_property
    def templates(self) -> AsyncTemplates:
        return AsyncTemplates(self._raw_client, self._server, self._auth)

    @cached_property
    def uploads(self) -> AsyncUploads:
        return AsyncUploads(self._raw_client, self._server, self._auth)

    @cached_property
    def webhook_endpoints(self) -> AsyncWebhookEndpoints:
        return AsyncWebhookEndpoints(self._raw_client, self._server, self._auth)

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


AsyncClient = AsyncDeliverdClient
