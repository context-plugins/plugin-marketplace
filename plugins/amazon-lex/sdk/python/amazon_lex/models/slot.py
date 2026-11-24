from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.shape1 import Shape1OrStr
from .value import Value, ValueDict


class Slot(SdkBaseModel):
    value: Optional[Value] = UNSET
    shape: Optional[Shape1OrStr] = UNSET
    """When the shape value is List, it indicates that the values field contains a list of slot values. When the value
    is Scalar, it indicates that the value field contains a single value."""

    values: Optional[list[Slot]] = UNSET
    """A list of one or more values that the user provided for the slot. For example, if a for a slot that elicits pizza
    toppings, the values might be "pepperoni" and "pineapple."
    """

    sub_slots: Optional[dict[str, Slot]] = Field(default=UNSET, alias="subSlots")
    """The constituent sub slots of a composite slot."""


class SlotDict(TypedDict):
    value: NotRequired[ValueDict]
    shape: NotRequired[Shape1OrStr]
    values: NotRequired[list[SlotDict]]
    sub_slots: NotRequired[dict[str, SlotDict]]
