from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class CreateGroupRequest(SdkBaseModel):
    """Request payload for creating a new user group"""

    name: str
    """Display name for the new group"""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Type of group to create"""


class CreateGroupRequestDict(TypedDict):
    name: str
    type_: NotRequired[TypeOrStr]
