from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomVocabularyEntryId(SdkBaseModel):
    item_id: str = Field(alias="itemId")
    """The unique item identifier for the custom vocabulary items."""


class CustomVocabularyEntryIdDict(TypedDict):
    item_id: str
