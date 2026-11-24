from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.order6 import Order6OrStr


class BotLocaleSortBy(SdkBaseModel):
    attribute: Literal["BotLocaleName"] = "BotLocaleName"
    """The bot locale attribute to sort by."""

    order: Order6OrStr
    """Specifies whether to sort the bot locales in ascending or descending order."""


class BotLocaleSortByDict(TypedDict):
    attribute: Literal["BotLocaleName"]
    order: Order6OrStr
