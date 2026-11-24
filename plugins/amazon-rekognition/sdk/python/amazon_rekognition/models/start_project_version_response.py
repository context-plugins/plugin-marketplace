from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status2_amazon_rekognition_project_version_api import Status2AmazonRekognitionProjectVersionApiOrStr


class StartProjectVersionResponse(SdkBaseModel):
    status: Optional[Status2AmazonRekognitionProjectVersionApiOrStr] = Field(default=UNSET, alias="Status")
    """The current running status of the model."""


class StartProjectVersionResponseDict(TypedDict):
    status: NotRequired[Status2AmazonRekognitionProjectVersionApiOrStr]
