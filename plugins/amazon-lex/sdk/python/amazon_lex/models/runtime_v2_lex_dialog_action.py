from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .elicit_sub_slot import ElicitSubSlot, ElicitSubSlotDict
from .enums.slot_elicitation_style import SlotElicitationStyleOrStr
from .enums.type1 import Type1OrStr


class RuntimeV2LexDialogAction(SdkBaseModel):
    type_: Type1OrStr = Field(alias="type")
    """The next action that the bot should take in its interaction with the user. The following values are possible:
    Close – Indicates that there will not be a response from the user. For example, the statement "Your order has been
    placed" does not require a response. ConfirmIntent – The next action is asking the user if the intent is complete
    and ready to be fulfilled. This is a yes/no question such as "Place the order?" Delegate – The next action is
    determined by Amazon Lex V2. ElicitIntent – The next action is to elicit an intent from the user. ElicitSlot – The
    next action is to elicit a slot valu"""

    slot_to_elicit: Optional[str] = Field(default=UNSET, alias="slotToElicit")
    """The name of the slot that should be elicited from the user."""

    slot_elicitation_style: Optional[SlotElicitationStyleOrStr] = Field(default=UNSET, alias="slotElicitationStyle")
    """Configures the slot to use spell-by-letter or spell-by-word style. When you use a style on a slot, users can
    spell out their input to make it clear to your bot. Spell by letter - "b" "o" "b" Spell by word - "b as in boy" "o
    as in oscar" "b as in boy" For more information, see Using spelling to enter slot values ."""

    sub_slot_to_elicit: Optional[ElicitSubSlot] = Field(default=UNSET, alias="subSlotToElicit")


class RuntimeV2LexDialogActionDict(TypedDict):
    type_: Type1OrStr
    slot_to_elicit: NotRequired[str]
    slot_elicitation_style: NotRequired[SlotElicitationStyleOrStr]
    sub_slot_to_elicit: NotRequired[ElicitSubSlotDict]
