from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.operator8 import Operator8OrStr


class IntentFilter(SdkBaseModel):
    name: Literal["IntentName"] = "IntentName"
    """The name of the field to use for the filter."""

    values: list[str]
    """The value to use for the filter."""

    operator: Operator8OrStr
    """The operator to use for the filter. Specify EQ when the ListIntents operation should return only aliases that
    equal the specified value. Specify CO when the ListIntents operation should return aliases that contain the
    specified value."""


class IntentFilterDict(TypedDict):
    name: Literal["IntentName"]
    values: list[str]
    operator: Operator8OrStr
