from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_classification_job_properties import (
    DocumentClassificationJobProperties,
    DocumentClassificationJobPropertiesDict,
)


class ListDocumentClassificationJobsResponse(SdkBaseModel):
    document_classification_job_properties_list: Optional[list[DocumentClassificationJobProperties]] = Field(
        default=UNSET, alias="DocumentClassificationJobPropertiesList"
    )
    """A list containing the properties of each job returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListDocumentClassificationJobsResponseDict(TypedDict):
    document_classification_job_properties_list: NotRequired[list[DocumentClassificationJobPropertiesDict]]
    next_token: NotRequired[str]
