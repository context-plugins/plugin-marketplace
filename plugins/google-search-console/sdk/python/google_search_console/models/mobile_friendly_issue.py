from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.rule import RuleOrStr


class MobileFriendlyIssue(SdkBaseModel):
    """Mobile-friendly issue."""

    rule: Optional[RuleOrStr] = UNSET
    """Rule violated."""


class MobileFriendlyIssueDict(TypedDict):
    rule: NotRequired[RuleOrStr]
