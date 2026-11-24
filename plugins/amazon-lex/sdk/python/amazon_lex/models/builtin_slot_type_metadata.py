from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.supported_locale import SupportedLocaleOrStr


class BuiltinSlotTypeMetadata(SdkBaseModel):
    signature: Optional[str] = UNSET
    """A unique identifier for the built-in slot type. To find the signature for a slot type, see Slot Type Reference in
    the Alexa Skills Kit."""

    supported_locales: Optional[list[SupportedLocaleOrStr]] = Field(default=UNSET, alias="supportedLocales")
    """A list of target locales for the slot."""


class BuiltinSlotTypeMetadataDict(TypedDict):
    signature: NotRequired[str]
    supported_locales: NotRequired[list[SupportedLocaleOrStr]]
