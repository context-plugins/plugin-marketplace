from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .store import Store, StoreDict


class StoresResponse(SdkBaseModel):
    stores: Optional[list[Store]] = UNSET
    """An array of stores offering the requested fulfillment type, sorted by distance with the closest store first."""


class StoresResponseDict(TypedDict):
    stores: NotRequired[list[StoreDict]]
