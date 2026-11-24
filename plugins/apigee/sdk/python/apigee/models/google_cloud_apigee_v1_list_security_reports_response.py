from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_report import (
    GoogleCloudApigeeV1SecurityReport,
    GoogleCloudApigeeV1SecurityReportDict,
)


class GoogleCloudApigeeV1ListSecurityReportsResponse(SdkBaseModel):
    """The response for SecurityReports."""

    security_reports: Optional[list[GoogleCloudApigeeV1SecurityReport]] = Field(default=UNSET, alias="securityReports")
    """The security reports belong to requested resource name."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """If the number of security reports exceeded the page size requested, the token can be used to fetch the next page
    in a subsequent call. If the response is the last page and there are no more reports to return this field is left
    empty."""


class GoogleCloudApigeeV1ListSecurityReportsResponseDict(TypedDict):
    security_reports: NotRequired[list[GoogleCloudApigeeV1SecurityReportDict]]
    next_page_token: NotRequired[str]
