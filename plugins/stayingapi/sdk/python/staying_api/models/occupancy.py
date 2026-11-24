from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Occupancy(SdkBaseModel):
    adults: int
    children: int
    child_ages: list[int] = Field(alias="childAges")


class OccupancyDict(TypedDict):
    adults: int
    children: int
    child_ages: list[int]
