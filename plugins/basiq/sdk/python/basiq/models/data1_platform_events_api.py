from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source2 import Source2, Source2Dict


class Data1PlatformEventsApi(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    code: Optional[str] = UNSET
    title: Optional[str] = UNSET
    detail: Optional[str] = UNSET
    source: Optional[Source2] = UNSET


class Data1PlatformEventsApiDict(TypedDict):
    type_: NotRequired[str]
    code: NotRequired[str]
    title: NotRequired[str]
    detail: NotRequired[str]
    source: NotRequired[Source2Dict]
