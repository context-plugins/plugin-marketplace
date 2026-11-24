from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr


class Group(SdkBaseModel):
    """A user group in the UiPath organization"""

    id: Optional[str] = UNSET
    """Unique identifier of the group"""

    name: Optional[str] = UNSET
    """Display name of the group"""

    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")
    """Type classification of the group"""

    user_count: Optional[int] = Field(default=UNSET, alias="userCount")
    """Number of members currently in the group"""


class GroupDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[Type1OrStr]
    user_count: NotRequired[int]
