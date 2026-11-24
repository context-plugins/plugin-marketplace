from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_async_query_result1 import (
    GoogleCloudApigeeV1AsyncQueryResult1,
    GoogleCloudApigeeV1AsyncQueryResult1Dict,
)
from .google_cloud_apigee_v1_query_metadata1 import (
    GoogleCloudApigeeV1QueryMetadata1,
    GoogleCloudApigeeV1QueryMetadata1Dict,
)


class GoogleCloudApigeeV1AsyncQuery(SdkBaseModel):
    result_rows: Optional[str] = Field(default=UNSET, alias="resultRows")
    """ResultRows is available only after the query is completed."""

    query_params: Optional[GoogleCloudApigeeV1QueryMetadata1] = Field(default=UNSET, alias="queryParams")
    """Contains information like metrics, dimenstions etc of the AsyncQuery."""

    result_file_size: Optional[str] = Field(default=UNSET, alias="resultFileSize")
    """ResultFileSize is available only after the query is completed."""

    self: Optional[str] = UNSET
    """Self link of the query. Example:
    ``/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`` or following format if
    query is running at host level: ``/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd``"""

    state: Optional[str] = UNSET
    """Query state could be "enqueued", "running", "completed", "failed"."""

    envgroup_hostname: Optional[str] = Field(default=UNSET, alias="envgroupHostname")
    """Hostname is available only when query is executed at host level."""

    report_definition_id: Optional[str] = Field(default=UNSET, alias="reportDefinitionId")
    """Asynchronous Report ID."""

    error: Optional[str] = UNSET
    """Error is set when query fails."""

    name: Optional[str] = UNSET
    """Asynchronous Query Name."""

    result: Optional[GoogleCloudApigeeV1AsyncQueryResult1] = UNSET
    """Result is available only after the query is completed."""

    execution_time: Optional[str] = Field(default=UNSET, alias="executionTime")
    """ExecutionTime is available only after the query is completed."""

    created: Optional[str] = UNSET
    """Creation time of the query."""

    updated: Optional[str] = UNSET
    """Last updated timestamp for the query."""


class GoogleCloudApigeeV1AsyncQueryDict(TypedDict):
    result_rows: NotRequired[str]
    query_params: NotRequired[GoogleCloudApigeeV1QueryMetadata1Dict]
    result_file_size: NotRequired[str]
    self: NotRequired[str]
    state: NotRequired[str]
    envgroup_hostname: NotRequired[str]
    report_definition_id: NotRequired[str]
    error: NotRequired[str]
    name: NotRequired[str]
    result: NotRequired[GoogleCloudApigeeV1AsyncQueryResult1Dict]
    execution_time: NotRequired[str]
    created: NotRequired[str]
    updated: NotRequired[str]
