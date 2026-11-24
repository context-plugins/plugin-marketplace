from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_api_doc_documentation1 import (
    GoogleCloudApigeeV1ApiDocDocumentation1,
    GoogleCloudApigeeV1ApiDocDocumentation1Dict,
)


class GoogleCloudApigeeV1ApiDocDocumentationResponse(SdkBaseModel):
    """The catalog item documentation wrapped with response status, error_code, etc."""

    error_code: Optional[str] = Field(default=UNSET, alias="errorCode")
    """Output only. Unique error code for the request, if any."""

    data: Optional[GoogleCloudApigeeV1ApiDocDocumentation1] = UNSET
    """Output only. The documentation resource."""

    status: Optional[str] = UNSET
    """Output only. Status of the operation."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Output only. Unique ID of the request."""

    message: Optional[str] = UNSET
    """Output only. Description of the operation."""


class GoogleCloudApigeeV1ApiDocDocumentationResponseDict(TypedDict):
    error_code: NotRequired[str]
    data: NotRequired[GoogleCloudApigeeV1ApiDocDocumentation1Dict]
    status: NotRequired[str]
    request_id: NotRequired[str]
    message: NotRequired[str]
