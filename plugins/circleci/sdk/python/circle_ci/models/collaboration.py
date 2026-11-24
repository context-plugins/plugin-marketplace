from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Collaboration(SdkBaseModel):
    vcs_type: Optional[str] = Field(default=UNSET, alias="vcs-type")
    """The VCS provider type"""

    name: Optional[str] = UNSET
    """The name of the organization"""

    avatar_url: Optional[str] = UNSET
    """The URL of the organization avatar"""

    slug: Optional[str] = UNSET
    """The organization slug"""

    id: Optional[UUID] = UNSET
    """The unique identifier of the organization"""


class CollaborationDict(TypedDict):
    vcs_type: NotRequired[str]
    name: NotRequired[str]
    avatar_url: NotRequired[str]
    slug: NotRequired[str]
    id: NotRequired[UUID]
