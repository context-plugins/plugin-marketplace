from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetMedicalVocabularyRequest(SdkBaseModel):
    vocabulary_name: str = Field(alias="VocabularyName")
    """The name of the custom medical vocabulary you want information about. Custom medical vocabulary names are case
    sensitive."""


class GetMedicalVocabularyRequestDict(TypedDict):
    vocabulary_name: str
