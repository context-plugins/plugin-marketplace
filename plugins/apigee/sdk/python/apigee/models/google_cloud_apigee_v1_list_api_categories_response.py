from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_api_category import GoogleCloudApigeeV1ApiCategory, GoogleCloudApigeeV1ApiCategoryDict


class GoogleCloudApigeeV1ListApiCategoriesResponse(SdkBaseModel):
    """The response for ``ListApiCategoriesRequest``. Next ID: 6"""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Unique ID of the request."""

    error_code: Optional[str] = Field(default=UNSET, alias="errorCode")
    """Unique error code for the request, if any."""

    message: Optional[str] = UNSET
    """Description of the operation."""

    status: Optional[str] = UNSET
    """Status of the operation."""

    data: Optional[list[GoogleCloudApigeeV1ApiCategory]] = UNSET
    """The API category resources."""


class GoogleCloudApigeeV1ListApiCategoriesResponseDict(TypedDict):
    request_id: NotRequired[str]
    error_code: NotRequired[str]
    message: NotRequired[str]
    status: NotRequired[str]
    data: NotRequired[list[GoogleCloudApigeeV1ApiCategoryDict]]
