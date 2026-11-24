from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.level1 import Level1OrStr


class MatchingConfidence(SdkBaseModel):
    level: Optional[Level1OrStr] = UNSET


class MatchingConfidenceDict(TypedDict):
    level: NotRequired[Level1OrStr]
