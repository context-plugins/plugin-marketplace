from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_classifier_summary import DocumentClassifierSummary, DocumentClassifierSummaryDict


class ListDocumentClassifierSummariesResponse(SdkBaseModel):
    document_classifier_summaries_list: Optional[list[DocumentClassifierSummary]] = Field(
        default=UNSET, alias="DocumentClassifierSummariesList"
    )
    """The list of summaries of document classifiers."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListDocumentClassifierSummariesResponseDict(TypedDict):
    document_classifier_summaries_list: NotRequired[list[DocumentClassifierSummaryDict]]
    next_token: NotRequired[str]
