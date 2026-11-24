from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analysis import Analysis, AnalysisDict
from .subgroup import Subgroup, SubgroupDict


class GroupReportingReportsApi(SdkBaseModel):
    id: Optional[str] = UNSET
    """Identifier for the group"""

    title: Optional[str] = UNSET
    """Title of the group"""

    sections: Optional[list[str]] = UNSET
    analysis: Optional[Analysis] = UNSET
    subgroup: Optional[list[Subgroup]] = UNSET


class GroupReportingReportsApiDict(TypedDict):
    id: NotRequired[str]
    title: NotRequired[str]
    sections: NotRequired[list[str]]
    analysis: NotRequired[AnalysisDict]
    subgroup: NotRequired[list[SubgroupDict]]
