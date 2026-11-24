from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .reason import Reason, ReasonDict


class SubScore(SdkBaseModel):
    score: OptionalNullable[int] = UNSET
    """null when assessment is individual_or_unverified"""

    reasons: Optional[list[Reason]] = UNSET


class SubScoreDict(TypedDict):
    score: NotRequired[int | None]
    reasons: NotRequired[list[ReasonDict]]
