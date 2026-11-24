from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .affiliation import Affiliation, AffiliationDict
from .check import Check, CheckDict
from .entity import Entity, EntityDict
from .enums.assessment import AssessmentOrStr
from .enums.engage_policy import EngagePolicyOrStr
from .enums.recommendation import RecommendationOrStr
from .enums.risk import RiskOrStr
from .location import Location, LocationDict
from .mitigation import Mitigation, MitigationDict
from .outcome_links import OutcomeLinks, OutcomeLinksDict
from .read import Read, ReadDict
from .receipt import Receipt, ReceiptDict
from .retention import Retention, RetentionDict
from .signal import Signal, SignalDict
from .sub_score import SubScore, SubScoreDict
from .website_declared import WebsiteDeclared, WebsiteDeclaredDict


class Qualification(SdkBaseModel):
    id: Optional[str] = UNSET
    assessment: Optional[AssessmentOrStr] = UNSET
    entity: OptionalNullable[Entity] = UNSET
    signals: Optional[list[Signal]] = UNSET
    legitimacy: Optional[SubScore] = UNSET
    capacity: Optional[SubScore] = UNSET
    consistency: Optional[SubScore] = UNSET
    recommendation: Optional[RecommendationOrStr] = UNSET
    engage: Optional[bool] = UNSET
    """Binary answer from the shared screen rules (same as /v1/screen) under ``policy``. Advisory."""

    risk: Optional[RiskOrStr] = UNSET
    mitigations: Optional[list[Mitigation]] = UNSET
    engage_policy: Optional[EngagePolicyOrStr] = UNSET
    suggested_next_step: Optional[str] = UNSET
    questions_to_ask: Optional[list[str]] = UNSET
    checks: Optional[list[Check]] = UNSET
    read: Optional[Read] = UNSET
    """What to show a human: render this and nothing else."""

    website_declared: OptionalNullable[WebsiteDeclared] = UNSET
    outcome_links: Optional[OutcomeLinks] = UNSET
    """Keyed calls only: signed one-click URLs that record an outcome (POST /v1/outcomes) without a login."""

    affiliation: OptionalNullable[Affiliation] = UNSET
    """Claims only: does the address's domain match the claimed business (same domain, a registry domain of the
    business, or a link between the two websites)? A mismatch means manual review, never rejection."""

    location: OptionalNullable[Location] = UNSET
    """Present when location inputs were given: the same block as /v1/screen. A mismatch, Tor exit or hosting/VPN
    network adds risk only alongside another negative signal and never sets engage=false on its own. Jid keeps only
    ip_country, ip_region, network type and consistent."""

    summary: OptionalNullable[str] = UNSET
    rules_version: Optional[str] = UNSET
    receipt: Optional[Receipt] = UNSET
    retention: Optional[Retention] = UNSET
    checks_used: Optional[int] = UNSET


class QualificationDict(TypedDict):
    id: NotRequired[str]
    assessment: NotRequired[AssessmentOrStr]
    entity: NotRequired[EntityDict | None]
    signals: NotRequired[list[SignalDict]]
    legitimacy: NotRequired[SubScoreDict]
    capacity: NotRequired[SubScoreDict]
    consistency: NotRequired[SubScoreDict]
    recommendation: NotRequired[RecommendationOrStr]
    engage: NotRequired[bool]
    risk: NotRequired[RiskOrStr]
    mitigations: NotRequired[list[MitigationDict]]
    engage_policy: NotRequired[EngagePolicyOrStr]
    suggested_next_step: NotRequired[str]
    questions_to_ask: NotRequired[list[str]]
    checks: NotRequired[list[CheckDict]]
    read: NotRequired[ReadDict]
    website_declared: NotRequired[WebsiteDeclaredDict | None]
    outcome_links: NotRequired[OutcomeLinksDict]
    affiliation: NotRequired[AffiliationDict | None]
    location: NotRequired[LocationDict | None]
    summary: NotRequired[str | None]
    rules_version: NotRequired[str]
    receipt: NotRequired[ReceiptDict]
    retention: NotRequired[RetentionDict]
    checks_used: NotRequired[int]
