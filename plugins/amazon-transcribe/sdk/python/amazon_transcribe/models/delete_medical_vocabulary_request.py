from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteMedicalVocabularyRequest(SdkBaseModel):
    vocabulary_name: str = Field(alias="VocabularyName")
    """The name of the custom medical vocabulary you want to delete. Custom medical vocabulary names are case
    sensitive."""


class DeleteMedicalVocabularyRequestDict(TypedDict):
    vocabulary_name: str
