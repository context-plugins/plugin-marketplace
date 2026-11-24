from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .platform import Platform, PlatformDict


class PlatformList(SdkBaseModel):
    data: list[Platform]


class PlatformListDict(TypedDict):
    data: list[PlatformDict]
