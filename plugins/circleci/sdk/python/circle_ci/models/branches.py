from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_summary import BuildSummary, BuildSummaryDict


class Branches(SdkBaseModel):
    recent_builds: Optional[list[BuildSummary]] = UNSET
    """Recent builds on this branch"""


class BranchesDict(TypedDict):
    recent_builds: NotRequired[list[BuildSummaryDict]]
