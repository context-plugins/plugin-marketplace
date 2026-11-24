from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteVocabularyFilterRequest(SdkBaseModel):
    vocabulary_filter_name: str = Field(alias="VocabularyFilterName")
    """The name of the custom vocabulary filter you want to delete. Custom vocabulary filter names are case
    sensitive."""


class DeleteVocabularyFilterRequestDict(TypedDict):
    vocabulary_filter_name: str
