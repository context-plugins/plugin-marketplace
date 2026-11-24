from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .date_model import DateModel, DateModelDict
from .enums.platform import PlatformOrStr


class Availability(SdkBaseModel):
    platform: PlatformOrStr
    listing_id: str = Field(alias="listingId")
    dates: list[DateModel]


class AvailabilityDict(TypedDict):
    platform: PlatformOrStr
    listing_id: str
    dates: list[DateModelDict]
