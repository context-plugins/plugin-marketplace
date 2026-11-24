from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .key_phrase import KeyPhrase, KeyPhraseDict


class BatchDetectKeyPhrasesItemResult(SdkBaseModel):
    index: Optional[int] = Field(default=UNSET, alias="Index")
    """The zero-based index of the document in the input list."""

    key_phrases: Optional[list[KeyPhrase]] = Field(default=UNSET, alias="KeyPhrases")
    """One or more KeyPhrase objects, one for each key phrase detected in the document."""


class BatchDetectKeyPhrasesItemResultDict(TypedDict):
    index: NotRequired[int]
    key_phrases: NotRequired[list[KeyPhraseDict]]
