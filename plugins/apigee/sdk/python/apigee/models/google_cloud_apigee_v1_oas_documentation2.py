from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.format import FormatOrStr
from .google_cloud_apigee_v1_documentation_file3 import (
    GoogleCloudApigeeV1DocumentationFile3,
    GoogleCloudApigeeV1DocumentationFile3Dict,
)


class GoogleCloudApigeeV1OasDocumentation2(SdkBaseModel):
    """Optional. OpenAPI Specification documentation."""

    spec: Optional[GoogleCloudApigeeV1DocumentationFile3] = UNSET
    """Required. The documentation file contents for the OpenAPI Specification. JSON and YAML file formats are
    supported."""

    format: Optional[FormatOrStr] = UNSET
    """Output only. The format of the input specification file contents."""


class GoogleCloudApigeeV1OasDocumentation2Dict(TypedDict):
    spec: NotRequired[GoogleCloudApigeeV1DocumentationFile3Dict]
    format: NotRequired[FormatOrStr]
