from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .approval_deliverd_dev_screen_api import ApprovalDeliverdDevScreenApi, ApprovalDeliverdDevScreenApiDict
from .enums.classification_deliverd_dev_reports_api import ClassificationDeliverdDevReportsApiOrStr
from .enums.mode_deliverd_dev_screen_api import ModeDeliverdDevScreenApiOrStr
from .enums.verdict_deliverd_dev_screen_api import VerdictDeliverdDevScreenApiOrStr
from .enums.would_be import WouldBeOrStr
from .finding import Finding, FindingDict
from .target import Target, TargetDict


class ApiV1ScreenResponse(SdkBaseModel):
    verdict: VerdictDeliverdDevScreenApiOrStr
    allowed: bool
    classification: ClassificationDeliverdDevReportsApiOrStr
    personal_data: bool = Field(alias="personalData")
    categories: list[str]
    counts: dict[str, float]
    offending: list[str]
    reasons: list[str]
    target: Target | None
    findings: list[Finding] | None
    redacted_text: str | None = Field(alias="redactedText")
    approval: ApprovalDeliverdDevScreenApi | None
    mode: ModeDeliverdDevScreenApiOrStr
    would_be: WouldBeOrStr | None = Field(alias="wouldBe")


class ApiV1ScreenResponseDict(TypedDict):
    verdict: VerdictDeliverdDevScreenApiOrStr
    allowed: bool
    classification: ClassificationDeliverdDevReportsApiOrStr
    personal_data: bool
    categories: list[str]
    counts: dict[str, float]
    offending: list[str]
    reasons: list[str]
    target: TargetDict | None
    findings: list[FindingDict] | None
    redacted_text: str | None
    approval: ApprovalDeliverdDevScreenApiDict | None
    mode: ModeDeliverdDevScreenApiOrStr
    would_be: WouldBeOrStr | None
