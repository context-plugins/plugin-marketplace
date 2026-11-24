from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .check import Check, CheckDict
from .entity_jid_screen_api import EntityJidScreenApi, EntityJidScreenApiDict
from .enums.check_runs import CheckRunsOrStr
from .enums.risk import RiskOrStr
from .enums.subject_type import SubjectTypeOrStr
from .location_jid_screen_api import LocationJidScreenApi, LocationJidScreenApiDict
from .mitigation import Mitigation, MitigationDict
from .outcome_links import OutcomeLinks, OutcomeLinksDict
from .read_jid_screen_api import ReadJidScreenApi, ReadJidScreenApiDict
from .reason_jid_screen_api import ReasonJidScreenApi, ReasonJidScreenApiDict
from .website_declared import WebsiteDeclared, WebsiteDeclaredDict


class ScreenResult(SdkBaseModel):
    engage: Optional[bool] = UNSET
    risk: Optional[RiskOrStr] = UNSET
    confidence: Optional[float] = UNSET
    subject_type: Optional[SubjectTypeOrStr] = UNSET
    summary: Optional[str] = UNSET
    hard_rules: Optional[list[str]] = UNSET
    risk_points: Optional[float] = UNSET
    reasons: Optional[list[ReasonJidScreenApi]] = UNSET
    mitigations: Optional[list[Mitigation]] = UNSET
    entity: OptionalNullable[EntityJidScreenApi] = UNSET
    checks: Optional[list[Check]] = UNSET
    read: Optional[ReadJidScreenApi] = UNSET
    """What to show a human: render this and nothing else."""

    website_declared: OptionalNullable[WebsiteDeclared] = UNSET
    outcome_links: Optional[OutcomeLinks] = UNSET
    """Keyed calls only: signed one-click URLs that record an outcome (POST /v1/outcomes) without a login."""

    check_runs: Optional[dict[str, CheckRunsOrStr]] = UNSET
    """Which live lookups ran (this was ``checks`` before 2026-10-05)."""

    receipt_id: Optional[str] = UNSET
    receipt_url: Optional[str] = UNSET
    rules_version: Optional[str] = UNSET
    latency_ms: Optional[float] = UNSET
    checks_used: Optional[float] = UNSET
    location: Optional[LocationJidScreenApi] = UNSET
    """Present when location inputs were given"""


class ScreenResultDict(TypedDict):
    engage: NotRequired[bool]
    risk: NotRequired[RiskOrStr]
    confidence: NotRequired[float]
    subject_type: NotRequired[SubjectTypeOrStr]
    summary: NotRequired[str]
    hard_rules: NotRequired[list[str]]
    risk_points: NotRequired[float]
    reasons: NotRequired[list[ReasonJidScreenApiDict]]
    mitigations: NotRequired[list[MitigationDict]]
    entity: NotRequired[EntityJidScreenApiDict | None]
    checks: NotRequired[list[CheckDict]]
    read: NotRequired[ReadJidScreenApiDict]
    website_declared: NotRequired[WebsiteDeclaredDict | None]
    outcome_links: NotRequired[OutcomeLinksDict]
    check_runs: NotRequired[dict[str, CheckRunsOrStr]]
    receipt_id: NotRequired[str]
    receipt_url: NotRequired[str]
    rules_version: NotRequired[str]
    latency_ms: NotRequired[float]
    checks_used: NotRequired[float]
    location: NotRequired[LocationJidScreenApiDict]
