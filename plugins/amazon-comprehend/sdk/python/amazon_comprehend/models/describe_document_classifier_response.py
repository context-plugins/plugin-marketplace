from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_classifier_properties import DocumentClassifierProperties, DocumentClassifierPropertiesDict


class DescribeDocumentClassifierResponse(SdkBaseModel):
    document_classifier_properties: Optional[DocumentClassifierProperties] = Field(
        default=UNSET, alias="DocumentClassifierProperties"
    )


class DescribeDocumentClassifierResponseDict(TypedDict):
    document_classifier_properties: NotRequired[DocumentClassifierPropertiesDict]
