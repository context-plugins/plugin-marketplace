from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SuggestChangeDiscardRequest(SdkBaseModel):
    doc_id: str = Field(alias="docId")
    """The ID of the suggestion document to discard. Must start with 'SUGGEST-'."""


class SuggestChangeDiscardRequestDict(TypedDict):
    doc_id: str
