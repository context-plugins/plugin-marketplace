from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EntityRecognizerEntityList(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """Specifies the Amazon S3 location where the entity list is located. The URI must be in the same Region as the API
    endpoint that you are calling."""


class EntityRecognizerEntityListDict(TypedDict):
    s3_uri: str
