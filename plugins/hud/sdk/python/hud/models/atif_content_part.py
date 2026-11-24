from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_hud_platform_jobs_api import TypeHudPlatformJobsApiOrStr
from .unions.source11 import Source11, Source11Dict


class AtifContentPart(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    type_: TypeHudPlatformJobsApiOrStr = Field(alias="type")
    text: Optional[str] = UNSET
    source: Optional[Source11] = UNSET


class AtifContentPartDict(TypedDict):
    type_: TypeHudPlatformJobsApiOrStr
    text: NotRequired[str]
    source: NotRequired[Source11Dict]
