from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProjectProjectRequest(SdkBaseModel):
    tag: Optional[str] = UNSET
    """The tag to build"""

    revision: Optional[str] = UNSET
    """The specific revision to build"""

    branch: Optional[str] = UNSET
    """The branch to build"""

    parallel: Optional[int] = UNSET
    """Number of parallel containers"""

    build_parameters: Optional[dict[str, str]] = UNSET
    """Additional build parameters"""


class ProjectProjectRequestDict(TypedDict):
    tag: NotRequired[str]
    revision: NotRequired[str]
    branch: NotRequired[str]
    parallel: NotRequired[int]
    build_parameters: NotRequired[dict[str, str]]
