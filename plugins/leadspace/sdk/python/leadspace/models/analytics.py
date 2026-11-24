from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .profile_score import ProfileScore, ProfileScoreDict


class Analytics(SdkBaseModel):
    job_functions: Optional[list[str]] = UNSET
    technologies: Optional[list[str]] = UNSET
    scores: Optional[list[ProfileScore]] = UNSET
    max_positive_score_profiles: Optional[list[str]] = UNSET


class AnalyticsDict(TypedDict):
    job_functions: NotRequired[list[str]]
    technologies: NotRequired[list[str]]
    scores: NotRequired[list[ProfileScoreDict]]
    max_positive_score_profiles: NotRequired[list[str]]
