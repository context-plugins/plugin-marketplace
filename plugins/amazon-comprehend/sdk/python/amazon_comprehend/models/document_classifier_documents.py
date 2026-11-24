from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DocumentClassifierDocuments(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """The S3 URI location of the training documents specified in the S3Uri CSV file."""

    test_s3_uri: Optional[str] = Field(default=UNSET, alias="TestS3Uri")
    """The S3 URI location of the test documents included in the TestS3Uri CSV file. This field is not required if you
    do not specify a test CSV file."""


class DocumentClassifierDocumentsDict(TypedDict):
    s3_uri: str
    test_s3_uri: NotRequired[str]
