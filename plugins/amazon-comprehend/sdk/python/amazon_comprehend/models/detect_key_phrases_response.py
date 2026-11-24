from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .key_phrase import KeyPhrase, KeyPhraseDict


class DetectKeyPhrasesResponse(SdkBaseModel):
    key_phrases: Optional[list[KeyPhrase]] = Field(default=UNSET, alias="KeyPhrases")
    """A collection of key phrases that Amazon Comprehend identified in the input text. For each key phrase, the
    response provides the text of the key phrase, where the key phrase begins and ends, and the level of confidence that
    Amazon Comprehend has in the accuracy of the detection."""


class DetectKeyPhrasesResponseDict(TypedDict):
    key_phrases: NotRequired[list[KeyPhraseDict]]
