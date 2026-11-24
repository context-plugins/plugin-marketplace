from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DatasetEntityRecognizerEntityList(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """Specifies the Amazon S3 location where the entity list is located."""


class DatasetEntityRecognizerEntityListDict(TypedDict):
    s3_uri: str
