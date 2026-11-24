from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VcsInfo(SdkBaseModel):
    """Version control system information"""

    vcs_url: Optional[str] = UNSET
    """The VCS URL"""

    provider: Optional[str] = UNSET
    """The VCS provider"""

    default_branch: Optional[str] = UNSET
    """The default branch name"""


class VcsInfoDict(TypedDict):
    vcs_url: NotRequired[str]
    provider: NotRequired[str]
    default_branch: NotRequired[str]
