from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .institution_platform_events_api import InstitutionPlatformEventsApi, InstitutionPlatformEventsApiDict
from .links1_platform_events_api import Links1PlatformEventsApi, Links1PlatformEventsApiDict


class DataPlatformEventsApi(SdkBaseModel):
    created_date: Optional[str] = Field(default=UNSET, alias="createdDate")
    id: Optional[str] = UNSET
    institution: Optional[InstitutionPlatformEventsApi] = UNSET
    last_used: Optional[str] = Field(default=UNSET, alias="lastUsed")
    links: Optional[Links1PlatformEventsApi] = UNSET
    mfa_enabled: Optional[bool] = Field(default=UNSET, alias="mfaEnabled")
    status: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")


class DataPlatformEventsApiDict(TypedDict):
    created_date: NotRequired[str]
    id: NotRequired[str]
    institution: NotRequired[InstitutionPlatformEventsApiDict]
    last_used: NotRequired[str]
    links: NotRequired[Links1PlatformEventsApiDict]
    mfa_enabled: NotRequired[bool]
    status: NotRequired[str]
    type_: NotRequired[str]
