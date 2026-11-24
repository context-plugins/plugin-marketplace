from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_report_query_metric import (
    GoogleCloudApigeeV1SecurityReportQueryMetric,
    GoogleCloudApigeeV1SecurityReportQueryMetricDict,
)


class GoogleCloudApigeeV1SecurityReportQuery(SdkBaseModel):
    """Body structure when user makes a request to create a security report."""

    metrics: Optional[list[GoogleCloudApigeeV1SecurityReportQueryMetric]] = UNSET
    """A list of Metrics."""

    csv_delimiter: Optional[str] = Field(default=UNSET, alias="csvDelimiter")
    r"""Delimiter used in the CSV file, if ``outputFormat`` is set to ``csv``. Defaults to the ``,`` (comma) character.
    Supported delimiter characters include comma (``,``), pipe (``|``), and tab (``\t``)."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """Valid values include: ``csv`` or ``json``. Defaults to ``json``. Note: Configure the delimiter for CSV output
    using the csvDelimiter property."""

    limit: Optional[int] = UNSET
    """Maximum number of rows that can be returned in the result."""

    report_definition_id: Optional[str] = Field(default=UNSET, alias="reportDefinitionId")
    """Report Definition ID."""

    filter: Optional[str] = UNSET
    """Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and
    should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference
    https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to
    filter on. For more information on the tokens that you use to build filter expressions, see Filter expression
    syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax"""

    envgroup_hostname: Optional[str] = Field(default=UNSET, alias="envgroupHostname")
    """Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is
    submitted by CreateHostSecurityReport where analytics data will be grouped by organization and hostname."""

    time_range: Optional[Any] = Field(default=UNSET, alias="timeRange")
    """Required. Time range for the query. Can use the following predefined strings to specify the time range:
    ``last60minutes`` ``last24hours`` ``last7days`` Or, specify the timeRange as a structure describing start and end
    timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end":
    "2018-08-01T00:18:00Z" }"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Security Report display name which users can specify."""

    dimensions: Optional[list[str]] = UNSET
    """A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions"""

    group_by_time_unit: Optional[str] = Field(default=UNSET, alias="groupByTimeUnit")
    """Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a
    query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant
    timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp
    includes milliseconds precision."""


class GoogleCloudApigeeV1SecurityReportQueryDict(TypedDict):
    metrics: NotRequired[list[GoogleCloudApigeeV1SecurityReportQueryMetricDict]]
    csv_delimiter: NotRequired[str]
    mime_type: NotRequired[str]
    limit: NotRequired[int]
    report_definition_id: NotRequired[str]
    filter: NotRequired[str]
    envgroup_hostname: NotRequired[str]
    time_range: NotRequired[Any]
    display_name: NotRequired[str]
    dimensions: NotRequired[list[str]]
    group_by_time_unit: NotRequired[str]
