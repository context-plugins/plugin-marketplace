from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.platform_type import PlatformTypeOrStr


class ApiV1AnalyticsSocialAccountForceRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    platform_type: PlatformTypeOrStr = Field(alias="platformType")


class ApiV1AnalyticsSocialAccountForceRequestDict(TypedDict):
    team_id: str
    platform_type: PlatformTypeOrStr
