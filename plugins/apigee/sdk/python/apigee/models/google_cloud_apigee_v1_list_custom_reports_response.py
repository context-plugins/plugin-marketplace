from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_custom_report import GoogleCloudApigeeV1CustomReport, GoogleCloudApigeeV1CustomReportDict


class GoogleCloudApigeeV1ListCustomReportsResponse(SdkBaseModel):
    """This message encapsulates a list of custom report definitions"""

    qualifier: Optional[list[GoogleCloudApigeeV1CustomReport]] = UNSET


class GoogleCloudApigeeV1ListCustomReportsResponseDict(TypedDict):
    qualifier: NotRequired[list[GoogleCloudApigeeV1CustomReportDict]]
