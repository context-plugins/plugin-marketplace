from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data8 import Data8, Data8Dict
from .links4 import Links4, Links4Dict


class EventsTypesResponse(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    count: Optional[int] = UNSET
    size: Optional[int] = UNSET
    data: Optional[list[Data8]] = UNSET
    """one or more events that the webhook would send messages for."""

    links: Optional[Links4] = UNSET


class EventsTypesResponseDict(TypedDict):
    type_: NotRequired[str]
    count: NotRequired[int]
    size: NotRequired[int]
    data: NotRequired[list[Data8Dict]]
    links: NotRequired[Links4Dict]
