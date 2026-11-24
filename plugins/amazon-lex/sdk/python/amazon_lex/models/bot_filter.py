from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name24 import Name24OrStr
from .enums.operator6 import Operator6OrStr


class BotFilter(SdkBaseModel):
    name: Name24OrStr
    """The name of the field to filter the list of bots."""

    values: list[str]
    """The value to use for filtering the list of bots."""

    operator: Operator6OrStr
    """The operator to use for the filter. Specify EQ when the ListBots operation should return only aliases that equal
    the specified value. Specify CO when the ListBots operation should return aliases that contain the specified
    value."""


class BotFilterDict(TypedDict):
    name: Name24OrStr
    values: list[str]
    operator: Operator6OrStr
