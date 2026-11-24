from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.channel import ChannelOrStr


class CoverageChannel(SdkBaseModel):
    channel: ChannelOrStr
    cadence: str
    last_ingested_at: OptionalNullable[RFC3339DateTime] = UNSET
    stale_after_seconds: int
    stale: bool


class CoverageChannelDict(TypedDict):
    channel: ChannelOrStr
    cadence: str
    last_ingested_at: NotRequired[RFC3339DateTime | None]
    stale_after_seconds: int
    stale: bool
