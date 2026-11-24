from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .reference_sentence_pair_list import ReferenceSentencePairList, ReferenceSentencePairListDict


class ReferenceSentenceConfig(SdkBaseModel):
    """Message of caller-provided reference configuration."""

    source_language_code: Optional[str] = Field(default=UNSET, alias="sourceLanguageCode")
    """Source language code."""

    target_language_code: Optional[str] = Field(default=UNSET, alias="targetLanguageCode")
    """Target language code."""

    reference_sentence_pair_lists: Optional[list[ReferenceSentencePairList]] = Field(
        default=UNSET, alias="referenceSentencePairLists"
    )
    """Reference sentences pair lists. Each list will be used as the references to translate the sentence under
    "content" field at the corresponding index. Length of the list is required to be equal to the length of "content"
    field."""


class ReferenceSentenceConfigDict(TypedDict):
    source_language_code: NotRequired[str]
    target_language_code: NotRequired[str]
    reference_sentence_pair_lists: NotRequired[list[ReferenceSentencePairListDict]]
