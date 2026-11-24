from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Project(SdkBaseModel):
    """The project this job belongs to"""

    slug: Optional[str] = UNSET
    """The project slug"""

    name: Optional[str] = UNSET
    """The project name"""

    external_url: Optional[str] = UNSET
    """External URL to the project"""


class ProjectDict(TypedDict):
    slug: NotRequired[str]
    name: NotRequired[str]
    external_url: NotRequired[str]
