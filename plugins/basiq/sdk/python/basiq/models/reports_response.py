from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links_platform_events_api import LinksPlatformEventsApi, LinksPlatformEventsApiDict


class ReportsResponse(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[str] = UNSET
    links: Optional[LinksPlatformEventsApi] = UNSET


class ReportsResponseDict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[str]
    links: NotRequired[LinksPlatformEventsApiDict]
