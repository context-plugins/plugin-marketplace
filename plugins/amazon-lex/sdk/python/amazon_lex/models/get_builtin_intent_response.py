from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .builtin_intent_slot import BuiltinIntentSlot, BuiltinIntentSlotDict
from .enums.supported_locale import SupportedLocaleOrStr


class GetBuiltinIntentResponse(SdkBaseModel):
    signature: Optional[str] = UNSET
    """The unique identifier for a built-in intent."""

    supported_locales: Optional[list[SupportedLocaleOrStr]] = Field(default=UNSET, alias="supportedLocales")
    """A list of locales that the intent supports."""

    slots: Optional[list[BuiltinIntentSlot]] = UNSET
    """An array of BuiltinIntentSlot objects, one entry for each slot type in the intent."""


class GetBuiltinIntentResponseDict(TypedDict):
    signature: NotRequired[str]
    supported_locales: NotRequired[list[SupportedLocaleOrStr]]
    slots: NotRequired[list[BuiltinIntentSlotDict]]
