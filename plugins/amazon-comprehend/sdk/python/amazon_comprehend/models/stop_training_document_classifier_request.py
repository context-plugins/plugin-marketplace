from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopTrainingDocumentClassifierRequest(SdkBaseModel):
    document_classifier_arn: str = Field(alias="DocumentClassifierArn")
    """The Amazon Resource Name (ARN) that identifies the document classifier currently being trained."""


class StopTrainingDocumentClassifierRequestDict(TypedDict):
    document_classifier_arn: str
