from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_export import GoogleCloudApigeeV1Export, GoogleCloudApigeeV1ExportDict


class GoogleCloudApigeeV1ListExportsResponse(SdkBaseModel):
    """The response for ListExports"""

    exports: Optional[list[GoogleCloudApigeeV1Export]] = UNSET
    """Details of the export jobs."""


class GoogleCloudApigeeV1ListExportsResponseDict(TypedDict):
    exports: NotRequired[list[GoogleCloudApigeeV1ExportDict]]
