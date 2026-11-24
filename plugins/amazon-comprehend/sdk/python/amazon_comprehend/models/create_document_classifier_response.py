from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateDocumentClassifierResponse(SdkBaseModel):
    document_classifier_arn: Optional[str] = Field(default=UNSET, alias="DocumentClassifierArn")
    """The Amazon Resource Name (ARN) that identifies the document classifier."""


class CreateDocumentClassifierResponseDict(TypedDict):
    document_classifier_arn: NotRequired[str]
