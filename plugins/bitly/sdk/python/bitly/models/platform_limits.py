from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .platform_limit import PlatformLimit, PlatformLimitDict


class PlatformLimits(SdkBaseModel):
    platform_limits: Optional[list[PlatformLimit]] = UNSET


class PlatformLimitsDict(TypedDict):
    platform_limits: NotRequired[list[PlatformLimitDict]]
