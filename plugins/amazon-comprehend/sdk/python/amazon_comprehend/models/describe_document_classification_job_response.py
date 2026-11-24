from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_classification_job_properties import (
    DocumentClassificationJobProperties,
    DocumentClassificationJobPropertiesDict,
)


class DescribeDocumentClassificationJobResponse(SdkBaseModel):
    document_classification_job_properties: Optional[DocumentClassificationJobProperties] = Field(
        default=UNSET, alias="DocumentClassificationJobProperties"
    )


class DescribeDocumentClassificationJobResponseDict(TypedDict):
    document_classification_job_properties: NotRequired[DocumentClassificationJobPropertiesDict]
