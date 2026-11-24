from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_amazon_transcribe_service_vocabularies_api import StatusAmazonTranscribeServiceVocabulariesApiOrStr
from .vocabulary_info_amazon_transcribe_service_vocabularies_api import (
    VocabularyInfoAmazonTranscribeServiceVocabulariesApi,
    VocabularyInfoAmazonTranscribeServiceVocabulariesApiDict,
)


class ListVocabulariesResponse(SdkBaseModel):
    status: Optional[StatusAmazonTranscribeServiceVocabulariesApiOrStr] = Field(default=UNSET, alias="Status")
    """Lists all custom vocabularies that have the status specified in your request. Vocabularies are ordered by
    creation date, with the newest vocabulary first."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If NextToken is present in your response, it indicates that not all results are displayed. To view the next set
    of results, copy the string associated with the NextToken parameter in your results output, then run your request
    again including NextToken with the value of the copied string. Repeat as needed to view all your results."""

    vocabularies: Optional[list[VocabularyInfoAmazonTranscribeServiceVocabulariesApi]] = Field(
        default=UNSET, alias="Vocabularies"
    )
    """Provides information about the custom vocabularies that match the criteria specified in your request."""


class ListVocabulariesResponseDict(TypedDict):
    status: NotRequired[StatusAmazonTranscribeServiceVocabulariesApiOrStr]
    next_token: NotRequired[str]
    vocabularies: NotRequired[list[VocabularyInfoAmazonTranscribeServiceVocabulariesApiDict]]
