from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.assisted_nlu_mode import AssistedNluModeOrStr
from .intent_disambiguation_settings import IntentDisambiguationSettings, IntentDisambiguationSettingsDict


class NluImprovementSpecification(SdkBaseModel):
    enabled: bool
    """Determines whether the Assisted NLU feature is enabled for the bot. When set to true, Amazon Lex uses advanced
    models to improve intent recognition and slot resolution, with the default being false."""

    assisted_nlu_mode: Optional[AssistedNluModeOrStr] = Field(default=UNSET, alias="assistedNluMode")
    """Specifies the mode for Assisted NLU operation. Use Primary to make Assisted NLU the primary intent recognition
    method, Fallback to use it only when standard NLU confidence is low, or DialogManager to use a large language model
    to manage the conversation, including intent recognition, slot elicitation, and confirmation."""

    intent_disambiguation_settings: Optional[IntentDisambiguationSettings] = Field(
        default=UNSET, alias="intentDisambiguationSettings"
    )


class NluImprovementSpecificationDict(TypedDict):
    enabled: bool
    assisted_nlu_mode: NotRequired[AssistedNluModeOrStr]
    intent_disambiguation_settings: NotRequired[IntentDisambiguationSettingsDict]
