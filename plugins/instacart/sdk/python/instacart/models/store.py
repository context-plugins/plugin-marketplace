from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .address1 import Address1, Address1Dict


class Store(SdkBaseModel):
    id: Optional[str] = UNSET
    """The unique identifier for the store."""

    name: Optional[str] = UNSET
    """The name of the store."""

    address: Optional[Address1] = UNSET
    """The physical address of the store."""

    distance: Optional[float] = UNSET
    """The distance from the customer's location to the store."""


class StoreDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    address: NotRequired[Address1Dict]
    distance: NotRequired[float]
