from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserTurnSlotOutput(SdkBaseModel):
    value: Optional[str] = UNSET
    """The value output by the slot recognition."""

    values: Optional[list[UserTurnSlotOutput]] = UNSET
    """Values that are output by the slot recognition."""

    sub_slots: Optional[dict[str, UserTurnSlotOutput]] = Field(default=UNSET, alias="subSlots")
    """A list of items mapping the name of the subslots to information about those subslots."""


class UserTurnSlotOutputDict(TypedDict):
    value: NotRequired[str]
    values: NotRequired[list[UserTurnSlotOutputDict]]
    sub_slots: NotRequired[dict[str, UserTurnSlotOutputDict]]
