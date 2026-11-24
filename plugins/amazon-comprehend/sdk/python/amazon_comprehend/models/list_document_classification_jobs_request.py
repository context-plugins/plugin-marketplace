from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_classification_job_filter import DocumentClassificationJobFilter, DocumentClassificationJobFilterDict


class ListDocumentClassificationJobsRequest(SdkBaseModel):
    filter: Optional[DocumentClassificationJobFilter] = Field(default=UNSET, alias="Filter")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return in each page. The default is 100."""


class ListDocumentClassificationJobsRequestDict(TypedDict):
    filter: NotRequired[DocumentClassificationJobFilterDict]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
