from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.shape import ShapeOrStr
from .slot_value import SlotValue, SlotValueDict


class SlotValueOverride(SdkBaseModel):
    shape: Optional[ShapeOrStr] = UNSET
    """When the shape value is List, it indicates that the values field contains a list of slot values. When the value
    is Scalar, it indicates that the value field contains a single value."""

    value: Optional[SlotValue] = UNSET
    values: Optional[list[SlotValueOverride]] = UNSET
    """A list of one or more values that the user provided for the slot. For example, for a slot that elicits pizza
    toppings, the values might be "pepperoni" and "pineapple."
    """


class SlotValueOverrideDict(TypedDict):
    shape: NotRequired[ShapeOrStr]
    value: NotRequired[SlotValueDict]
    values: NotRequired[list[SlotValueOverrideDict]]
