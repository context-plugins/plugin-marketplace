from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DeleteResponse(SdkBaseModel):
    """Response for certain delete operations."""

    status: Optional[str] = UNSET
    """Status of the operation."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Unique ID of the request."""

    error_code: Optional[str] = Field(default=UNSET, alias="errorCode")
    """Unique error code for the request, if any."""

    message: Optional[str] = UNSET
    """Description of the operation."""

    gcp_resource: Optional[str] = Field(default=UNSET, alias="gcpResource")
    """Google Cloud name of deleted resource."""


class GoogleCloudApigeeV1DeleteResponseDict(TypedDict):
    status: NotRequired[str]
    request_id: NotRequired[str]
    error_code: NotRequired[str]
    message: NotRequired[str]
    gcp_resource: NotRequired[str]
