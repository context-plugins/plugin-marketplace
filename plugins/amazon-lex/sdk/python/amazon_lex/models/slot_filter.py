from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.operator10 import Operator10OrStr


class SlotFilter(SdkBaseModel):
    name: Literal["SlotName"] = "SlotName"
    """The name of the field to use for filtering."""

    values: list[str]
    """The value to use to filter the response."""

    operator: Operator10OrStr
    """The operator to use for the filter. Specify EQ when the ListSlots operation should return only aliases that equal
    the specified value. Specify CO when the ListSlots operation should return aliases that contain the specified
    value."""


class SlotFilterDict(TypedDict):
    name: Literal["SlotName"]
    values: list[str]
    operator: Operator10OrStr
