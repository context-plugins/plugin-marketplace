from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.supported_locale import SupportedLocaleOrStr


class BuiltinIntentMetadata(SdkBaseModel):
    signature: Optional[str] = UNSET
    """A unique identifier for the built-in intent. To find the signature for an intent, see Standard Built-in Intents
    in the Alexa Skills Kit."""

    supported_locales: Optional[list[SupportedLocaleOrStr]] = Field(default=UNSET, alias="supportedLocales")
    """A list of identifiers for the locales that the intent supports."""


class BuiltinIntentMetadataDict(TypedDict):
    signature: NotRequired[str]
    supported_locales: NotRequired[list[SupportedLocaleOrStr]]
