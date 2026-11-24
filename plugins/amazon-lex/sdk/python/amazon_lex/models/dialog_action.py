from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class DialogAction(SdkBaseModel):
    type_: TypeOrStr = Field(alias="type")
    """The action that the bot should execute."""

    slot_to_elicit: Optional[str] = Field(default=UNSET, alias="slotToElicit")
    """If the dialog action is ElicitSlot, defines the slot to elicit from the user."""

    suppress_next_message: Optional[bool] = Field(default=UNSET, alias="suppressNextMessage")
    """When true the next message for the intent is not used."""


class DialogActionDict(TypedDict):
    type_: TypeOrStr
    slot_to_elicit: NotRequired[str]
    suppress_next_message: NotRequired[bool]
