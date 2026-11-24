from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProjectProjectTreeBranchRequest(SdkBaseModel):
    parallel: Optional[int] = UNSET
    """Number of parallel containers"""

    revision: Optional[str] = UNSET
    """The specific revision to build"""

    build_parameters: Optional[dict[str, str]] = UNSET
    """Additional build parameters"""


class ProjectProjectTreeBranchRequestDict(TypedDict):
    parallel: NotRequired[int]
    revision: NotRequired[str]
    build_parameters: NotRequired[dict[str, str]]
