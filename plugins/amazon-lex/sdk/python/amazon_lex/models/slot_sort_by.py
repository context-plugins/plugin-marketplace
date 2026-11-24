from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.attribute4 import Attribute4OrStr
from .enums.order7 import Order7OrStr


class SlotSortBy(SdkBaseModel):
    attribute: Attribute4OrStr
    """The attribute to use to sort the list."""

    order: Order7OrStr
    """The order to sort the list. You can choose ascending or descending."""


class SlotSortByDict(TypedDict):
    attribute: Attribute4OrStr
    order: Order7OrStr
