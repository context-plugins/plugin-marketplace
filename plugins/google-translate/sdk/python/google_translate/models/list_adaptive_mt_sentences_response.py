from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .adaptive_mt_sentence import AdaptiveMtSentence, AdaptiveMtSentenceDict


class ListAdaptiveMtSentencesResponse(SdkBaseModel):
    """List AdaptiveMt sentences response."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Optional."""

    adaptive_mt_sentences: Optional[list[AdaptiveMtSentence]] = Field(default=UNSET, alias="adaptiveMtSentences")
    """Output only. The list of AdaptiveMtSentences."""


class ListAdaptiveMtSentencesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    adaptive_mt_sentences: NotRequired[list[AdaptiveMtSentenceDict]]
