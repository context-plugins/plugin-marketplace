from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_custom_report_metric import (
    GoogleCloudApigeeV1CustomReportMetric,
    GoogleCloudApigeeV1CustomReportMetricDict,
)
from .google_cloud_apigee_v1_report_property import (
    GoogleCloudApigeeV1ReportProperty,
    GoogleCloudApigeeV1ReportPropertyDict,
)


class GoogleCloudApigeeV1CustomReport(SdkBaseModel):
    last_viewed_at: Optional[str] = Field(default=UNSET, alias="lastViewedAt")
    """Output only. Last viewed time of this entity as milliseconds since epoch"""

    from_time: Optional[str] = Field(default=UNSET, alias="fromTime")
    """Legacy field: not used. Contains the from time for the report"""

    comments: Optional[list[str]] = UNSET
    """Legacy field: not used. This field contains a list of comments associated with custom report"""

    topk: Optional[str] = UNSET
    """Legacy field: not used. This field contains the top k parameter value for restricting the result"""

    chart_type: Optional[str] = Field(default=UNSET, alias="chartType")
    """This field contains the chart type for the report"""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt"""

    properties: Optional[list[GoogleCloudApigeeV1ReportProperty]] = UNSET
    """This field contains report properties such as ui metadata etc."""

    tags: Optional[list[str]] = UNSET
    """Legacy field: not used. This field contains a list of tags associated with custom report"""

    sort_by_cols: Optional[list[str]] = Field(default=UNSET, alias="sortByCols")
    """Legacy field: not used much. Contains the list of sort by columns"""

    offset: Optional[str] = UNSET
    """Legacy field: not used. This field contains the offset for the data"""

    sort_order: Optional[str] = Field(default=UNSET, alias="sortOrder")
    """Legacy field: not used much. Contains the sort order for the sort columns"""

    limit: Optional[str] = UNSET
    """Legacy field: not used This field contains the limit for the result retrieved"""

    time_unit: Optional[str] = Field(default=UNSET, alias="timeUnit")
    """This field contains the time unit of aggregation for the report"""

    filter: Optional[str] = UNSET
    """This field contains the filter expression"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """This is the display name for the report"""

    environment: Optional[str] = UNSET
    """Output only. Environment name"""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Unix time when the app was created json key: createdAt"""

    metrics: Optional[list[GoogleCloudApigeeV1CustomReportMetric]] = UNSET
    """Required. This contains the list of metrics"""

    organization: Optional[str] = UNSET
    """Output only. Organization name"""

    to_time: Optional[str] = Field(default=UNSET, alias="toTime")
    """Legacy field: not used. Contains the end time for the report"""

    dimensions: Optional[list[str]] = UNSET
    """This contains the list of dimensions for the report"""

    name: Optional[str] = UNSET
    """Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id"""


class GoogleCloudApigeeV1CustomReportDict(TypedDict):
    last_viewed_at: NotRequired[str]
    from_time: NotRequired[str]
    comments: NotRequired[list[str]]
    topk: NotRequired[str]
    chart_type: NotRequired[str]
    last_modified_at: NotRequired[str]
    properties: NotRequired[list[GoogleCloudApigeeV1ReportPropertyDict]]
    tags: NotRequired[list[str]]
    sort_by_cols: NotRequired[list[str]]
    offset: NotRequired[str]
    sort_order: NotRequired[str]
    limit: NotRequired[str]
    time_unit: NotRequired[str]
    filter: NotRequired[str]
    display_name: NotRequired[str]
    environment: NotRequired[str]
    created_at: NotRequired[str]
    metrics: NotRequired[list[GoogleCloudApigeeV1CustomReportMetricDict]]
    organization: NotRequired[str]
    to_time: NotRequired[str]
    dimensions: NotRequired[list[str]]
    name: NotRequired[str]
