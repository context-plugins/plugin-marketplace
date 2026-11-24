from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BuiltinIntentSlot(SdkBaseModel):
    name: Optional[str] = UNSET
    """A list of the slots defined for the intent."""


class BuiltinIntentSlotDict(TypedDict):
    name: NotRequired[str]
