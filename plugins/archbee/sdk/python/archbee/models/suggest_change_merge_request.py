from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SuggestChangeMergeRequest(SdkBaseModel):
    doc_id: str = Field(alias="docId")
    """The ID of the suggestion document to merge. Must start with 'SUGGEST-'."""


class SuggestChangeMergeRequestDict(TypedDict):
    doc_id: str
