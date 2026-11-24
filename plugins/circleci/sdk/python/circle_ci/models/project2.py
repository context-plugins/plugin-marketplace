from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vcs_info import VcsInfo, VcsInfoDict


class Project2(SdkBaseModel):
    slug: Optional[str] = UNSET
    """The project slug"""

    name: Optional[str] = UNSET
    """The project name"""

    id: Optional[UUID] = UNSET
    """The unique identifier of the project"""

    organization_name: Optional[str] = UNSET
    """The name of the organization"""

    organization_slug: Optional[str] = UNSET
    """The slug of the organization"""

    organization_id: Optional[UUID] = UNSET
    """The ID of the organization"""

    vcs_info: Optional[VcsInfo] = UNSET
    """Version control system information"""


class Project2Dict(TypedDict):
    slug: NotRequired[str]
    name: NotRequired[str]
    id: NotRequired[UUID]
    organization_name: NotRequired[str]
    organization_slug: NotRequired[str]
    organization_id: NotRequired[UUID]
    vcs_info: NotRequired[VcsInfoDict]
