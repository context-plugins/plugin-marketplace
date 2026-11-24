from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_api_category1 import GoogleCloudApigeeV1ApiCategory1, GoogleCloudApigeeV1ApiCategory1Dict


class GoogleCloudApigeeV1ApiCategoryResponse(SdkBaseModel):
    """The API category resource wrapped with response status, error_code, etc."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Unique ID of the request."""

    data: Optional[GoogleCloudApigeeV1ApiCategory1] = UNSET
    """The API category resource."""

    message: Optional[str] = UNSET
    """Description of the operation."""

    error_code: Optional[str] = Field(default=UNSET, alias="errorCode")
    """Unique error code for the request, if any."""

    status: Optional[str] = UNSET
    """Status of the operation."""


class GoogleCloudApigeeV1ApiCategoryResponseDict(TypedDict):
    request_id: NotRequired[str]
    data: NotRequired[GoogleCloudApigeeV1ApiCategory1Dict]
    message: NotRequired[str]
    error_code: NotRequired[str]
    status: NotRequired[str]
