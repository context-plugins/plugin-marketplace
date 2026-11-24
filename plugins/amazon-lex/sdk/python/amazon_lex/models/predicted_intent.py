from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .intent_confidence import IntentConfidence, IntentConfidenceDict


class PredictedIntent(SdkBaseModel):
    intent_name: Optional[str] = Field(default=UNSET, alias="intentName")
    """The name of the intent that Amazon Lex suggests satisfies the user's intent."""

    nlu_intent_confidence: Optional[IntentConfidence] = Field(default=UNSET, alias="nluIntentConfidence")
    slots: Optional[dict[str, str]] = UNSET
    """The slot and slot values associated with the predicted intent."""


class PredictedIntentDict(TypedDict):
    intent_name: NotRequired[str]
    nlu_intent_confidence: NotRequired[IntentConfidenceDict]
    slots: NotRequired[dict[str, str]]
