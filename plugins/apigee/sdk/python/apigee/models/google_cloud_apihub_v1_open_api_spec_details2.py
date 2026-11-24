from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.format_apigee_projects_api import FormatApigeeProjectsApiOrStr
from .google_cloud_apihub_v1_owner1 import GoogleCloudApihubV1Owner1, GoogleCloudApihubV1Owner1Dict


class GoogleCloudApihubV1OpenApiSpecDetails2(SdkBaseModel):
    """Output only. Additional details apart from ``OperationDetails`` parsed from an OpenAPI spec. The OperationDetails
    parsed from the spec can be obtained by using ListAPIOperations method."""

    owner: Optional[GoogleCloudApihubV1Owner1] = UNSET
    """Output only. Owner details for the spec. This maps to ``info.contact`` in OpenAPI spec."""

    version: Optional[str] = UNSET
    """Output only. The version in the spec. This maps to ``info.version`` in OpenAPI spec."""

    format: Optional[FormatApigeeProjectsApiOrStr] = UNSET
    """Output only. The format of the spec."""


class GoogleCloudApihubV1OpenApiSpecDetails2Dict(TypedDict):
    owner: NotRequired[GoogleCloudApihubV1Owner1Dict]
    version: NotRequired[str]
    format: NotRequired[FormatApigeeProjectsApiOrStr]
