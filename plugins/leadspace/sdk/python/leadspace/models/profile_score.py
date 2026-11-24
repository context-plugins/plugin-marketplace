from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .score import Score, ScoreDict


class ProfileScore(SdkBaseModel):
    profile_name: Optional[str] = UNSET
    score: Optional[Score] = UNSET


class ProfileScoreDict(TypedDict):
    profile_name: NotRequired[str]
    score: NotRequired[ScoreDict]
