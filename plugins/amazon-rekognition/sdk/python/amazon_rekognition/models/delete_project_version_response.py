from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_amazon_rekognition_project_version_api import StatusAmazonRekognitionProjectVersionApiOrStr


class DeleteProjectVersionResponse(SdkBaseModel):
    status: Optional[StatusAmazonRekognitionProjectVersionApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of the deletion operation."""


class DeleteProjectVersionResponseDict(TypedDict):
    status: NotRequired[StatusAmazonRekognitionProjectVersionApiOrStr]
