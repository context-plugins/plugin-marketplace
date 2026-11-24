from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1GenerateUploadUrlResponse(SdkBaseModel):
    """Response for GenerateUploadUrl method."""

    upload_uri: Optional[str] = Field(default=UNSET, alias="uploadUri")
    """The Google Cloud Storage signed URL that can be used to upload a new Archive zip file."""


class GoogleCloudApigeeV1GenerateUploadUrlResponseDict(TypedDict):
    upload_uri: NotRequired[str]
