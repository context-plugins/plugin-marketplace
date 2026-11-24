from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetVocabularyFilterRequest(SdkBaseModel):
    vocabulary_filter_name: str = Field(alias="VocabularyFilterName")
    """The name of the custom vocabulary filter you want information about. Custom vocabulary filter names are case
    sensitive."""


class GetVocabularyFilterRequestDict(TypedDict):
    vocabulary_filter_name: str
