from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name26 import Name26OrStr
from .enums.operator9 import Operator9OrStr


class SlotTypeFilter(SdkBaseModel):
    name: Name26OrStr
    """The name of the field to use for filtering."""

    values: list[str]
    """The value to use to filter the response."""

    operator: Operator9OrStr
    """The operator to use for the filter. Specify EQ when the ListSlotTypes operation should return only aliases that
    equal the specified value. Specify CO when the ListSlotTypes operation should return aliases that contain the
    specified value."""


class SlotTypeFilterDict(TypedDict):
    name: Name26OrStr
    values: list[str]
    operator: Operator9OrStr
