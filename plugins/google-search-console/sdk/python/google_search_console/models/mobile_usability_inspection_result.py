from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.verdict import VerdictOrStr
from .mobile_usability_issue import MobileUsabilityIssue, MobileUsabilityIssueDict


class MobileUsabilityInspectionResult(SdkBaseModel):
    """Mobile-usability inspection results."""

    verdict: Optional[VerdictOrStr] = UNSET
    """High-level mobile-usability inspection result for this URL."""

    issues: Optional[list[MobileUsabilityIssue]] = UNSET
    """A list of zero or more mobile-usability issues detected for this URL."""


class MobileUsabilityInspectionResultDict(TypedDict):
    verdict: NotRequired[VerdictOrStr]
    issues: NotRequired[list[MobileUsabilityIssueDict]]
