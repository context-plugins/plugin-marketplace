from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_documentation_file2 import (
    GoogleCloudApigeeV1DocumentationFile2,
    GoogleCloudApigeeV1DocumentationFile2Dict,
)


class GoogleCloudApigeeV1AsyncApiDocumentation2(SdkBaseModel):
    """Optional. AsyncAPI Specification documentation."""

    spec: Optional[GoogleCloudApigeeV1DocumentationFile2] = UNSET
    """Required. The documentation file contents for the AsyncAPI Specification. JSON and YAML file formats are
    supported."""


class GoogleCloudApigeeV1AsyncApiDocumentation2Dict(TypedDict):
    spec: NotRequired[GoogleCloudApigeeV1DocumentationFile2Dict]
