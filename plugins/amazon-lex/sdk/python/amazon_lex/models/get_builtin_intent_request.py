from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetBuiltinIntentRequest(SdkBaseModel):
    signature: str
    """The unique identifier for a built-in intent. To find the signature for an intent, see Standard Built-in Intents
    in the Alexa Skills Kit."""


class GetBuiltinIntentRequestDict(TypedDict):
    signature: str
