from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DateModel(SdkBaseModel):
    date: str
    available: bool
    min_nights: int = Field(alias="minNights")
    check_in: bool = Field(alias="checkIn")
    check_out: bool = Field(alias="checkOut")
    bookable: bool


class DateModelDict(TypedDict):
    date: str
    available: bool
    min_nights: int
    check_in: bool
    check_out: bool
    bookable: bool
