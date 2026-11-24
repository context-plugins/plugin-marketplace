from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BuildSummary(SdkBaseModel):
    build_url: Optional[str] = UNSET
    """URL to view the build"""

    build_num: Optional[int] = UNSET
    """The build number"""

    status: Optional[str] = UNSET
    """The build status"""

    vcs_revision: Optional[str] = UNSET
    """The VCS revision"""


class BuildSummaryDict(TypedDict):
    build_url: NotRequired[str]
    build_num: NotRequired[int]
    status: NotRequired[str]
    vcs_revision: NotRequired[str]
