from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item5 import Item5, Item5Dict


class ApiV1MiscInstagramLocationsResponse(SdkBaseModel):
    items: list[Item5]


class ApiV1MiscInstagramLocationsResponseDict(TypedDict):
    items: list[Item5Dict]
