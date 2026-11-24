from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_amazon_rekognition_project_api import Status1AmazonRekognitionProjectApiOrStr


class DeleteProjectResponse(SdkBaseModel):
    status: Optional[Status1AmazonRekognitionProjectApiOrStr] = Field(default=UNSET, alias="Status")
    """The current status of the delete project operation."""


class DeleteProjectResponseDict(TypedDict):
    status: NotRequired[Status1AmazonRekognitionProjectApiOrStr]
