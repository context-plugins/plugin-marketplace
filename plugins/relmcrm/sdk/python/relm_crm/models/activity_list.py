from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .activity import Activity, ActivityDict
from .enums.object1 import Object1OrStr


class ActivityList(SdkBaseModel):
    object_: Optional[Object1OrStr] = Field(default=UNSET, alias="object")
    has_more: Optional[bool] = UNSET
    next_cursor: OptionalNullable[str] = UNSET
    data: Optional[list[Activity]] = UNSET


class ActivityListDict(TypedDict):
    object_: NotRequired[Object1OrStr]
    has_more: NotRequired[bool]
    next_cursor: NotRequired[str | None]
    data: NotRequired[list[ActivityDict]]
