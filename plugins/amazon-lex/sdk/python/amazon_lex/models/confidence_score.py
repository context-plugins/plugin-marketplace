from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConfidenceScore(SdkBaseModel):
    score: Optional[float] = UNSET
    """A score that indicates how confident Amazon Lex V2 is that an intent satisfies the user's intent. Ranges between
    0.00 and 1.00. Higher scores indicate higher confidence."""


class ConfidenceScoreDict(TypedDict):
    score: NotRequired[float]
