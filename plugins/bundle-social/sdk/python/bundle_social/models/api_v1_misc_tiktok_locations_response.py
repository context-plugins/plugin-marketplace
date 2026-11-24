from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item7 import Item7, Item7Dict


class ApiV1MiscTiktokLocationsResponse(SdkBaseModel):
    items: list[Item7]


class ApiV1MiscTiktokLocationsResponseDict(TypedDict):
    items: list[Item7Dict]
