from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .branches import Branches, BranchesDict


class ProjectCircleciProjectApi(SdkBaseModel):
    vcs_url: Optional[str] = UNSET
    """The VCS URL of the project"""

    followed: Optional[bool] = UNSET
    """Whether the user follows this project"""

    username: Optional[str] = UNSET
    """The organization or username"""

    reponame: Optional[str] = UNSET
    """The repository name"""

    branches: Optional[dict[str, Branches]] = UNSET
    """Branch information with recent builds"""


class ProjectCircleciProjectApiDict(TypedDict):
    vcs_url: NotRequired[str]
    followed: NotRequired[bool]
    username: NotRequired[str]
    reponame: NotRequired[str]
    branches: NotRequired[dict[str, BranchesDict]]
