from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_amazon_transcribe_service_medical_vocabulary_api import (
    StatusAmazonTranscribeServiceMedicalVocabularyApiOrStr,
)
from .vocabulary_info import VocabularyInfo, VocabularyInfoDict


class ListMedicalVocabulariesResponse(SdkBaseModel):
    status: Optional[StatusAmazonTranscribeServiceMedicalVocabularyApiOrStr] = Field(default=UNSET, alias="Status")
    """Lists all custom medical vocabularies that have the status specified in your request. Custom vocabularies are
    ordered by creation date, with the newest vocabulary first."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If NextToken is present in your response, it indicates that not all results are displayed. To view the next set
    of results, copy the string associated with the NextToken parameter in your results output, then run your request
    again including NextToken with the value of the copied string. Repeat as needed to view all your results."""

    vocabularies: Optional[list[VocabularyInfo]] = Field(default=UNSET, alias="Vocabularies")
    """Provides information about the custom medical vocabularies that match the criteria specified in your request."""


class ListMedicalVocabulariesResponseDict(TypedDict):
    status: NotRequired[StatusAmazonTranscribeServiceMedicalVocabularyApiOrStr]
    next_token: NotRequired[str]
    vocabularies: NotRequired[list[VocabularyInfoDict]]
