from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchDetectDominantLanguageRequest(SdkBaseModel):
    text_list: list[str] = Field(alias="TextList")
    """A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents.
    Each document should contain at least 20 characters. The maximum size of each document is 5 KB."""


class BatchDetectDominantLanguageRequestDict(TypedDict):
    text_list: list[str]
