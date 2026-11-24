from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links_platform_events_api import LinksPlatformEventsApi, LinksPlatformEventsApiDict


class Data8(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[str] = UNSET
    """Identifer of the event type"""

    description: Optional[str] = UNSET
    """a brief description of the event type"""

    links: Optional[LinksPlatformEventsApi] = UNSET


class Data8Dict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[str]
    description: NotRequired[str]
    links: NotRequired[LinksPlatformEventsApiDict]
