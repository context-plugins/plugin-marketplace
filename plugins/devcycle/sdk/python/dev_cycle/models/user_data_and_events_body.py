from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event import Event, EventDict
from .user_data import UserData, UserDataDict


class UserDataAndEventsBody(SdkBaseModel):
    events: Optional[list[Event]] = UNSET
    user: Optional[UserData] = UNSET


class UserDataAndEventsBodyDict(TypedDict):
    events: NotRequired[list[EventDict]]
    user: NotRequired[UserDataDict]
