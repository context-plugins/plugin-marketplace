from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PivotMatch(SdkBaseModel):
    pivot: Optional[str] = UNSET
    pivot_type: Optional[str] = UNSET
    total_related_threats: Optional[int] = UNSET
    confidence: Optional[float] = UNSET


class PivotMatchDict(TypedDict):
    pivot: NotRequired[str]
    pivot_type: NotRequired[str]
    total_related_threats: NotRequired[int]
    confidence: NotRequired[float]
