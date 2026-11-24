from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpaceGroupDeleteRequest(SdkBaseModel):
    space_group_id: Optional[str] = Field(default=UNSET, alias="spaceGroupId")
    """Space group id to delete."""


class SpaceGroupDeleteRequestDict(TypedDict):
    space_group_id: NotRequired[str]
