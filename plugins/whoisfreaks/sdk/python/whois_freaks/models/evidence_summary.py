from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EvidenceSummary(SdkBaseModel):
    why_flagged: Optional[list[str]] = UNSET


class EvidenceSummaryDict(TypedDict):
    why_flagged: NotRequired[list[str]]
