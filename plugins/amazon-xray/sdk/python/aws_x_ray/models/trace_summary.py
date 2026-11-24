from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .availability_zone_detail import AvailabilityZoneDetail, AvailabilityZoneDetailDict
from .error_root_cause import ErrorRootCause, ErrorRootCauseDict
from .fault_root_cause import FaultRootCause, FaultRootCauseDict
from .http import Http, HttpDict
from .instance_id_detail import InstanceIdDetail, InstanceIdDetailDict
from .resource_arn_detail import ResourceArnDetail, ResourceArnDetailDict
from .response_time_root_cause import ResponseTimeRootCause, ResponseTimeRootCauseDict
from .service_id import ServiceId, ServiceIdDict
from .trace_user import TraceUser, TraceUserDict


class TraceSummary(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The unique identifier for the request that generated the trace's segments and subsegments."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The start time of a trace, based on the earliest trace segment start time."""

    duration: Optional[float] = Field(default=UNSET, alias="Duration")
    """The length of time in seconds between the start time of the earliest segment that started and the end time of the
    last segment that completed."""

    response_time: Optional[float] = Field(default=UNSET, alias="ResponseTime")
    """The length of time in seconds between the start and end times of the root segment. If the service performs work
    asynchronously, the response time measures the time before the response is sent to the user, while the duration
    measures the amount of time before the last traced activity completes."""

    has_fault: Optional[bool] = Field(default=UNSET, alias="HasFault")
    """The root segment document has a 500 series error."""

    has_error: Optional[bool] = Field(default=UNSET, alias="HasError")
    """The root segment document has a 400 series error."""

    has_throttle: Optional[bool] = Field(default=UNSET, alias="HasThrottle")
    """One or more of the segment documents has a 429 throttling error."""

    is_partial: Optional[bool] = Field(default=UNSET, alias="IsPartial")
    """One or more of the segment documents is in progress."""

    http: Optional[Http] = Field(default=UNSET, alias="Http")
    annotations: Optional[dict[str, Any]] = Field(default=UNSET, alias="Annotations")
    """Annotations from the trace's segment documents."""

    users: Optional[list[TraceUser]] = Field(default=UNSET, alias="Users")
    """Users from the trace's segment documents."""

    service_ids: Optional[list[ServiceId]] = Field(default=UNSET, alias="ServiceIds")
    """Service IDs from the trace's segment documents."""

    resource_arns: Optional[list[ResourceArnDetail]] = Field(default=UNSET, alias="ResourceARNs")
    """A list of resource ARNs for any resource corresponding to the trace segments."""

    instance_ids: Optional[list[InstanceIdDetail]] = Field(default=UNSET, alias="InstanceIds")
    """A list of EC2 instance IDs for any instance corresponding to the trace segments."""

    availability_zones: Optional[list[AvailabilityZoneDetail]] = Field(default=UNSET, alias="AvailabilityZones")
    """A list of Availability Zones for any zone corresponding to the trace segments."""

    entry_point: Optional[ServiceId] = Field(default=UNSET, alias="EntryPoint")
    fault_root_causes: Optional[list[FaultRootCause]] = Field(default=UNSET, alias="FaultRootCauses")
    """A collection of FaultRootCause structures corresponding to the trace segments."""

    error_root_causes: Optional[list[ErrorRootCause]] = Field(default=UNSET, alias="ErrorRootCauses")
    """A collection of ErrorRootCause structures corresponding to the trace segments."""

    response_time_root_causes: Optional[list[ResponseTimeRootCause]] = Field(
        default=UNSET, alias="ResponseTimeRootCauses"
    )
    """A collection of ResponseTimeRootCause structures corresponding to the trace segments."""

    revision: Optional[int] = Field(default=UNSET, alias="Revision")
    """The revision number of a trace."""

    matched_event_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="MatchedEventTime")
    """The matched time stamp of a defined event."""


class TraceSummaryDict(TypedDict):
    id: NotRequired[str]
    start_time: NotRequired[RFC3339DateTime]
    duration: NotRequired[float]
    response_time: NotRequired[float]
    has_fault: NotRequired[bool]
    has_error: NotRequired[bool]
    has_throttle: NotRequired[bool]
    is_partial: NotRequired[bool]
    http: NotRequired[HttpDict]
    annotations: NotRequired[dict[str, Any]]
    users: NotRequired[list[TraceUserDict]]
    service_ids: NotRequired[list[ServiceIdDict]]
    resource_arns: NotRequired[list[ResourceArnDetailDict]]
    instance_ids: NotRequired[list[InstanceIdDetailDict]]
    availability_zones: NotRequired[list[AvailabilityZoneDetailDict]]
    entry_point: NotRequired[ServiceIdDict]
    fault_root_causes: NotRequired[list[FaultRootCauseDict]]
    error_root_causes: NotRequired[list[ErrorRootCauseDict]]
    response_time_root_causes: NotRequired[list[ResponseTimeRootCauseDict]]
    revision: NotRequired[int]
    matched_event_time: NotRequired[RFC3339DateTime]
