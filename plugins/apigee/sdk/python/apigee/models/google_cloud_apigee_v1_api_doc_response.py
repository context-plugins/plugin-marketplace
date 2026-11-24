from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_api_doc2 import GoogleCloudApigeeV1ApiDoc2, GoogleCloudApigeeV1ApiDoc2Dict


class GoogleCloudApigeeV1ApiDocResponse(SdkBaseModel):
    """The catalog item resource wrapped with response status, error_code, etc."""

    data: Optional[GoogleCloudApigeeV1ApiDoc2] = UNSET
    """The catalog item resource."""

    status: Optional[str] = UNSET
    """Status of the operation."""

    message: Optional[str] = UNSET
    """Description of the operation."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Unique ID of the request."""

    error_code: Optional[str] = Field(default=UNSET, alias="errorCode")
    """Unique error code for the request, if any."""


class GoogleCloudApigeeV1ApiDocResponseDict(TypedDict):
    data: NotRequired[GoogleCloudApigeeV1ApiDoc2Dict]
    status: NotRequired[str]
    message: NotRequired[str]
    request_id: NotRequired[str]
    error_code: NotRequired[str]
