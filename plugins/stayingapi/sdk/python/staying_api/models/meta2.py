from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.platform import PlatformOrStr


class Meta2(SdkBaseModel):
    request_id: str = Field(alias="requestId")
    credits_charged: Literal[0] = Field(default=0, alias="creditsCharged")
    """Polling and in-progress/failed states never bill."""

    platforms: list[PlatformOrStr]


class Meta2Dict(TypedDict):
    request_id: str
    credits_charged: Literal[0]
    platforms: list[PlatformOrStr]
