from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ReferenceSentencePair(SdkBaseModel):
    """A pair of sentences used as reference in source and target languages."""

    source_sentence: Optional[str] = Field(default=UNSET, alias="sourceSentence")
    """Source sentence in the sentence pair."""

    target_sentence: Optional[str] = Field(default=UNSET, alias="targetSentence")
    """Target sentence in the sentence pair."""


class ReferenceSentencePairDict(TypedDict):
    source_sentence: NotRequired[str]
    target_sentence: NotRequired[str]
