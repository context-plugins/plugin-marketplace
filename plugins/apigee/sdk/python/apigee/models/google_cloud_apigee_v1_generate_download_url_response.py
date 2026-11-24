from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1GenerateDownloadUrlResponse(SdkBaseModel):
    """Response for GenerateDownloadUrl method."""

    download_uri: Optional[str] = Field(default=UNSET, alias="downloadUri")
    """The Google Cloud Storage signed URL that can be used to download the Archive zip file."""


class GoogleCloudApigeeV1GenerateDownloadUrlResponseDict(TypedDict):
    download_uri: NotRequired[str]
