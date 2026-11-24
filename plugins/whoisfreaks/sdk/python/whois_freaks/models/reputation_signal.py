from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ReputationSignal(SdkBaseModel):
    code: Optional[str] = UNSET
    weight: Optional[int] = UNSET
    polarity: Optional[str] = UNSET
    category: Optional[str] = UNSET
    evidence: Optional[str] = UNSET
    confidence: Optional[float] = UNSET


class ReputationSignalDict(TypedDict):
    code: NotRequired[str]
    weight: NotRequired[int]
    polarity: NotRequired[str]
    category: NotRequired[str]
    evidence: NotRequired[str]
    confidence: NotRequired[float]
