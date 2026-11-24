from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform import PlatformOrStr
from .enums.status61 import Status61, Status61OrStr
from .unions.config2 import Config2, Config2Dict


class ApiV1AutomationProviderSettingsRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    platform: PlatformOrStr
    config: Optional[Config2] = UNSET
    status: Status61OrStr = Status61.DRAFT


class ApiV1AutomationProviderSettingsRequestDict(TypedDict):
    team_id: str
    platform: PlatformOrStr
    config: NotRequired[Config2Dict]
    status: NotRequired[Status61OrStr]
