from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.operator7 import Operator7OrStr


class BotLocaleFilter(SdkBaseModel):
    name: Literal["BotLocaleName"] = "BotLocaleName"
    """The name of the field to filter the list of bots."""

    values: list[str]
    """The value to use for filtering the list of bots."""

    operator: Operator7OrStr
    """The operator to use for the filter. Specify EQ when the ListBotLocales operation should return only aliases that
    equal the specified value. Specify CO when the ListBotLocales operation should return aliases that contain the
    specified value."""


class BotLocaleFilterDict(TypedDict):
    name: Literal["BotLocaleName"]
    values: list[str]
    operator: Operator7OrStr
