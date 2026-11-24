from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.credits_charged import CreditsChargedOrInt
from .enums.platform import PlatformOrStr


class Meta1(SdkBaseModel):
    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    credits_charged: Optional[CreditsChargedOrInt] = Field(default=UNSET, alias="creditsCharged")
    platforms: Optional[list[PlatformOrStr]] = UNSET


class Meta1Dict(TypedDict):
    request_id: NotRequired[str]
    credits_charged: NotRequired[CreditsChargedOrInt]
    platforms: NotRequired[list[PlatformOrStr]]
