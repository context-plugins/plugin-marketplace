from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SampleUtterance(SdkBaseModel):
    utterance: str
    """The sample utterance that Amazon Lex uses to build its machine-learning model to recognize intents."""


class SampleUtteranceDict(TypedDict):
    utterance: str
