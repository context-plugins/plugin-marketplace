from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.actions import Actions
from .apis.agents import Agents
from .apis.ai_systems import AiSystems
from .apis.analytics import Analytics
from .apis.approvals import Approvals
from .apis.audiences import Audiences
from .apis.audit_events import AuditEvents
from .apis.collections import Collections
from .apis.comments import Comments
from .apis.decision_sessions import DecisionSessions
from .apis.drafts import Drafts
from .apis.evidence import Evidence
from .apis.flows import Flows
from .apis.gates import Gates
from .apis.governance_api import GovernanceApi
from .apis.knowledge import Knowledge
from .apis.playbooks import Playbooks
from .apis.policies import Policies
from .apis.reports import Reports
from .apis.reviews import Reviews
from .apis.risk_indicators import RiskIndicators
from .apis.schedules import Schedules
from .apis.screen import Screen
from .apis.tasks import Tasks
from .apis.templates import Templates
from .apis.uploads import Uploads
from .apis.webhook_endpoints import WebhookEndpoints
from .apis.workspaces import Workspaces
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseDeliverdClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
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


class DeliverdClient(BaseDeliverdClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
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
                param[str]("User-Agent", "DeliverdClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def actions(self) -> Actions:
        return Actions(self._raw_client, self._server, self._auth)

    @cached_property
    def agents(self) -> Agents:
        return Agents(self._raw_client, self._server, self._auth)

    @cached_property
    def ai_systems(self) -> AiSystems:
        return AiSystems(self._raw_client, self._server, self._auth)

    @cached_property
    def analytics(self) -> Analytics:
        return Analytics(self._raw_client, self._server, self._auth)

    @cached_property
    def approvals(self) -> Approvals:
        return Approvals(self._raw_client, self._server, self._auth)

    @cached_property
    def audiences(self) -> Audiences:
        return Audiences(self._raw_client, self._server, self._auth)

    @cached_property
    def audit_events(self) -> AuditEvents:
        return AuditEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def collections(self) -> Collections:
        return Collections(self._raw_client, self._server, self._auth)

    @cached_property
    def comments(self) -> Comments:
        return Comments(self._raw_client, self._server, self._auth)

    @cached_property
    def decision_sessions(self) -> DecisionSessions:
        return DecisionSessions(self._raw_client, self._server, self._auth)

    @cached_property
    def drafts(self) -> Drafts:
        return Drafts(self._raw_client, self._server)

    @cached_property
    def evidence(self) -> Evidence:
        return Evidence(self._raw_client, self._server)

    @cached_property
    def flows(self) -> Flows:
        return Flows(self._raw_client, self._server, self._auth)

    @cached_property
    def gates(self) -> Gates:
        return Gates(self._raw_client, self._server, self._auth)

    @cached_property
    def governance_api(self) -> GovernanceApi:
        return GovernanceApi(self._raw_client, self._server, self._auth)

    @cached_property
    def knowledge(self) -> Knowledge:
        return Knowledge(self._raw_client, self._server, self._auth)

    @cached_property
    def playbooks(self) -> Playbooks:
        return Playbooks(self._raw_client, self._server, self._auth)

    @cached_property
    def policies(self) -> Policies:
        return Policies(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> Reports:
        return Reports(self._raw_client, self._server, self._auth)

    @cached_property
    def reviews(self) -> Reviews:
        return Reviews(self._raw_client, self._server, self._auth)

    @cached_property
    def risk_indicators(self) -> RiskIndicators:
        return RiskIndicators(self._raw_client, self._server, self._auth)

    @cached_property
    def schedules(self) -> Schedules:
        return Schedules(self._raw_client, self._server, self._auth)

    @cached_property
    def screen(self) -> Screen:
        return Screen(self._raw_client, self._server, self._auth)

    @cached_property
    def tasks(self) -> Tasks:
        return Tasks(self._raw_client, self._server, self._auth)

    @cached_property
    def templates(self) -> Templates:
        return Templates(self._raw_client, self._server, self._auth)

    @cached_property
    def uploads(self) -> Uploads:
        return Uploads(self._raw_client, self._server, self._auth)

    @cached_property
    def webhook_endpoints(self) -> WebhookEndpoints:
        return WebhookEndpoints(self._raw_client, self._server, self._auth)

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


Client = DeliverdClient
