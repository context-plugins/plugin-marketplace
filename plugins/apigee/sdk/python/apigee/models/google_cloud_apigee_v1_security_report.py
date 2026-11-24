from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_report_metadata3 import (
    GoogleCloudApigeeV1SecurityReportMetadata3,
    GoogleCloudApigeeV1SecurityReportMetadata3Dict,
)
from .google_cloud_apigee_v1_security_report_result_metadata1 import (
    GoogleCloudApigeeV1SecurityReportResultMetadata1,
    GoogleCloudApigeeV1SecurityReportResultMetadata1Dict,
)


class GoogleCloudApigeeV1SecurityReport(SdkBaseModel):
    """SecurityReport saves all the information about the created security report."""

    report_definition_id: Optional[str] = Field(default=UNSET, alias="reportDefinitionId")
    """Report Definition ID."""

    result_file_size: Optional[str] = Field(default=UNSET, alias="resultFileSize")
    """ResultFileSize is available only after the query is completed."""

    envgroup_hostname: Optional[str] = Field(default=UNSET, alias="envgroupHostname")
    """Hostname is available only when query is executed at host level."""

    error: Optional[str] = UNSET
    """Error is set when query fails."""

    self: Optional[str] = UNSET
    """Self link of the query. Example:
    ``/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`` or following format
    if query is running at host level:
    ``/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd``"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Display Name specified by the user."""

    execution_time: Optional[str] = Field(default=UNSET, alias="executionTime")
    """ExecutionTime is available only after the query is completed."""

    result: Optional[GoogleCloudApigeeV1SecurityReportResultMetadata1] = UNSET
    """Result is available only after the query is completed."""

    result_rows: Optional[str] = Field(default=UNSET, alias="resultRows")
    """ResultRows is available only after the query is completed."""

    query_params: Optional[GoogleCloudApigeeV1SecurityReportMetadata3] = Field(default=UNSET, alias="queryParams")
    """Contains information like metrics, dimenstions etc of the Security Report."""

    state: Optional[str] = UNSET
    """Query state could be "enqueued", "running", "completed", "expired" and "failed"."""

    updated: Optional[str] = UNSET
    """Output only. Last updated timestamp for the query."""

    created: Optional[str] = UNSET
    """Creation time of the query."""


class GoogleCloudApigeeV1SecurityReportDict(TypedDict):
    report_definition_id: NotRequired[str]
    result_file_size: NotRequired[str]
    envgroup_hostname: NotRequired[str]
    error: NotRequired[str]
    self: NotRequired[str]
    display_name: NotRequired[str]
    execution_time: NotRequired[str]
    result: NotRequired[GoogleCloudApigeeV1SecurityReportResultMetadata1Dict]
    result_rows: NotRequired[str]
    query_params: NotRequired[GoogleCloudApigeeV1SecurityReportMetadata3Dict]
    state: NotRequired[str]
    updated: NotRequired[str]
    created: NotRequired[str]
