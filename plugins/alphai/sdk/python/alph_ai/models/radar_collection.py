from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status import StatusOrStr


class RadarCollection(SdkBaseModel):
    status: StatusOrStr
    reasons: list[str]
    required_channels: list[str]


class RadarCollectionDict(TypedDict):
    status: StatusOrStr
    reasons: list[str]
    required_channels: list[str]
