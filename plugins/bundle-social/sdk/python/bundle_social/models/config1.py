from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ice_breaker import IceBreaker, IceBreakerDict


class Config1(SdkBaseModel):
    ice_breakers: Optional[list[IceBreaker]] = Field(default=UNSET, alias="iceBreakers")


class Config1Dict(TypedDict):
    ice_breakers: NotRequired[list[IceBreakerDict]]
