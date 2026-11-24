from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeDocumentClassifierRequest(SdkBaseModel):
    document_classifier_arn: str = Field(alias="DocumentClassifierArn")
    """The Amazon Resource Name (ARN) that identifies the document classifier. The CreateDocumentClassifier operation
    returns this identifier in its response."""


class DescribeDocumentClassifierRequestDict(TypedDict):
    document_classifier_arn: str
