from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links_platform_events_api import LinksPlatformEventsApi, LinksPlatformEventsApiDict


class InstitutionPlatformEventsApi(SdkBaseModel):
    id: Optional[str] = UNSET
    links: Optional[LinksPlatformEventsApi] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")


class InstitutionPlatformEventsApiDict(TypedDict):
    id: NotRequired[str]
    links: NotRequired[LinksPlatformEventsApiDict]
    type_: NotRequired[str]
