from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ElicitSubSlot(SdkBaseModel):
    name: str
    """The name of the slot that should be elicited from the user."""

    sub_slot_to_elicit: Optional[ElicitSubSlot] = Field(default=UNSET, alias="subSlotToElicit")


class ElicitSubSlotDict(TypedDict):
    name: str
    sub_slot_to_elicit: NotRequired[ElicitSubSlotDict]
