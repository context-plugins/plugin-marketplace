from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_summary import BuildSummary, BuildSummaryDict


class ProjectProjectFollowResponse(SdkBaseModel):
    following: Optional[bool] = UNSET
    """Whether the project is now being followed"""

    first_build: Optional[BuildSummary] = UNSET


class ProjectProjectFollowResponseDict(TypedDict):
    following: NotRequired[bool]
    first_build: NotRequired[BuildSummaryDict]
