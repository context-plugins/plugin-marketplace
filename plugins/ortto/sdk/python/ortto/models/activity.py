from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Activity(SdkBaseModel):
    activity_id: Optional[str] = UNSET
    person_id: Optional[str] = UNSET
    attributes: Optional[Any] = UNSET
    fields: Optional[Any] = UNSET
    location: Optional[Any] = UNSET


class ActivityDict(TypedDict):
    activity_id: NotRequired[str]
    person_id: NotRequired[str]
    attributes: NotRequired[Any]
    fields: NotRequired[Any]
    location: NotRequired[Any]
