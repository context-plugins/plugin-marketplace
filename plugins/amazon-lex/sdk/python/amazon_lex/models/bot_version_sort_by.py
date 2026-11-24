from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.order9 import Order9OrStr


class BotVersionSortBy(SdkBaseModel):
    attribute: Literal["BotVersion"] = "BotVersion"
    """The attribute to use to sort the list of versions."""

    order: Order9OrStr
    """The order to sort the list. You can specify ascending or descending order."""


class BotVersionSortByDict(TypedDict):
    attribute: Literal["BotVersion"]
    order: Order9OrStr
