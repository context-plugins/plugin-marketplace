from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.attribute3 import Attribute3OrStr
from .enums.order13 import Order13OrStr


class SlotTypeSortBy(SdkBaseModel):
    attribute: Attribute3OrStr
    """The attribute to use to sort the list of slot types."""

    order: Order13OrStr
    """The order to sort the list. You can say ascending or descending."""


class SlotTypeSortByDict(TypedDict):
    attribute: Attribute3OrStr
    order: Order13OrStr
