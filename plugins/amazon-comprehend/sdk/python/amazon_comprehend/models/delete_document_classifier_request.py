from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteDocumentClassifierRequest(SdkBaseModel):
    document_classifier_arn: str = Field(alias="DocumentClassifierArn")
    """The Amazon Resource Name (ARN) that identifies the document classifier."""


class DeleteDocumentClassifierRequestDict(TypedDict):
    document_classifier_arn: str
