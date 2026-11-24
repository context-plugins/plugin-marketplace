from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .platform_api import PlatformApi, PlatformApiDict


class SupportV1MetadataPlatformsResponse(SdkBaseModel):
    platforms: Optional[list[PlatformApi]] = UNSET


class SupportV1MetadataPlatformsResponseDict(TypedDict):
    platforms: NotRequired[list[PlatformApiDict]]
