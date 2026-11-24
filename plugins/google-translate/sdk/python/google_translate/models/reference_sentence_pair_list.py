from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .reference_sentence_pair import ReferenceSentencePair, ReferenceSentencePairDict


class ReferenceSentencePairList(SdkBaseModel):
    """A list of reference sentence pairs."""

    reference_sentence_pairs: Optional[list[ReferenceSentencePair]] = Field(
        default=UNSET, alias="referenceSentencePairs"
    )
    """Reference sentence pairs."""


class ReferenceSentencePairListDict(TypedDict):
    reference_sentence_pairs: NotRequired[list[ReferenceSentencePairDict]]
