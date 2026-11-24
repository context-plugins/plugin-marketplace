from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Vcs(SdkBaseModel):
    """VCS information for this pipeline"""

    provider_name: Optional[str] = UNSET
    """The VCS provider name"""

    origin_repository_url: Optional[str] = UNSET
    """The origin repository URL"""

    target_repository_url: Optional[str] = UNSET
    """The target repository URL"""

    revision: Optional[str] = UNSET
    """The VCS revision"""

    branch: Optional[str] = UNSET
    """The VCS branch"""

    tag: Optional[str] = UNSET
    """The VCS tag"""


class VcsDict(TypedDict):
    provider_name: NotRequired[str]
    origin_repository_url: NotRequired[str]
    target_repository_url: NotRequired[str]
    revision: NotRequired[str]
    branch: NotRequired[str]
    tag: NotRequired[str]
