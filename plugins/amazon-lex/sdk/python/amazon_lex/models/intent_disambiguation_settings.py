from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IntentDisambiguationSettings(SdkBaseModel):
    enabled: bool
    """Determines whether the Intent Disambiguation feature is enabled. When set to true, Amazon Lex will present
    disambiguation options to users when multiple intents could match their input, with the default being false."""

    max_disambiguation_intents: Optional[int] = Field(default=UNSET, alias="maxDisambiguationIntents")
    """Specifies the maximum number of intent options (2-5) to present to users when disambiguation is needed. This
    setting determines how many intent options will be shown to users when the system detects ambiguous input. The
    default value is 3."""

    custom_disambiguation_message: Optional[str] = Field(default=UNSET, alias="customDisambiguationMessage")
    """Provides a custom message that will be displayed before presenting the disambiguation options to users. This
    message helps set the context for users and can be customized to match your bot's tone and brand. If not specified,
    a default message will be used."""


class IntentDisambiguationSettingsDict(TypedDict):
    enabled: bool
    max_disambiguation_intents: NotRequired[int]
    custom_disambiguation_message: NotRequired[str]
