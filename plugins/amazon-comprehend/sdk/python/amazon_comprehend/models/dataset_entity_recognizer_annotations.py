from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DatasetEntityRecognizerAnnotations(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """Specifies the Amazon S3 location where the training documents for an entity recognizer are located. The URI must
    be in the same Region as the API endpoint that you are calling."""


class DatasetEntityRecognizerAnnotationsDict(TypedDict):
    s3_uri: str
