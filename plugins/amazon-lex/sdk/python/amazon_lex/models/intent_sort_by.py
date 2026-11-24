from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.attribute2 import Attribute2OrStr
from .enums.order7 import Order7OrStr


class IntentSortBy(SdkBaseModel):
    attribute: Attribute2OrStr
    """The attribute to use to sort the list of intents."""

    order: Order7OrStr
    """The order to sort the list. You can choose ascending or descending."""


class IntentSortByDict(TypedDict):
    attribute: Attribute2OrStr
    order: Order7OrStr
