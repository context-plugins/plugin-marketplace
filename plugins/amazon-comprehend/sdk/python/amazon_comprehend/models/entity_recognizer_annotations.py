from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EntityRecognizerAnnotations(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """Specifies the Amazon S3 location where the annotations for an entity recognizer are located. The URI must be in
    the same Region as the API endpoint that you are calling."""

    test_s3_uri: Optional[str] = Field(default=UNSET, alias="TestS3Uri")
    """Specifies the Amazon S3 location where the test annotations for an entity recognizer are located. The URI must be
    in the same Region as the API endpoint that you are calling."""


class EntityRecognizerAnnotationsDict(TypedDict):
    s3_uri: str
    test_s3_uri: NotRequired[str]
