from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetVocabularyRequest(SdkBaseModel):
    vocabulary_name: str = Field(alias="VocabularyName")
    """The name of the custom vocabulary you want information about. Custom vocabulary names are case sensitive."""


class GetVocabularyRequestDict(TypedDict):
    vocabulary_name: str
