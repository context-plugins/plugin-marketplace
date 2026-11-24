from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.order7 import Order7OrStr


class BotSortBy(SdkBaseModel):
    attribute: Literal["BotName"] = "BotName"
    """The attribute to use to sort the list of bots."""

    order: Order7OrStr
    """The order to sort the list. You can choose ascending or descending."""


class BotSortByDict(TypedDict):
    attribute: Literal["BotName"]
    order: Order7OrStr
