from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user_turn_slot_output import UserTurnSlotOutput, UserTurnSlotOutputDict


class UserTurnIntentOutput(SdkBaseModel):
    name: str
    """The name of the intent."""

    slots: Optional[dict[str, UserTurnSlotOutput]] = UNSET
    """The slots associated with the intent."""


class UserTurnIntentOutputDict(TypedDict):
    name: str
    slots: NotRequired[dict[str, UserTurnSlotOutputDict]]
