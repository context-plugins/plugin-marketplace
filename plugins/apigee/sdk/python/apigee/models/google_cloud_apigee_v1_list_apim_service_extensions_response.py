from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_apim_service_extension import (
    GoogleCloudApigeeV1ApimServiceExtension,
    GoogleCloudApigeeV1ApimServiceExtensionDict,
)


class GoogleCloudApigeeV1ListApimServiceExtensionsResponse(SdkBaseModel):
    """Response for list service extensions."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in an ``ListApimServiceExtensions`` request to retrieve the next page. If
    omitted, no subsequent pages exist."""

    apim_service_extensions: Optional[list[GoogleCloudApigeeV1ApimServiceExtension]] = Field(
        default=UNSET, alias="apimServiceExtensions"
    )
    """service extension in a given organization."""


class GoogleCloudApigeeV1ListApimServiceExtensionsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    apim_service_extensions: NotRequired[list[GoogleCloudApigeeV1ApimServiceExtensionDict]]
