from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .edge import Edge, EdgeDict
from .histogram_entry import HistogramEntry, HistogramEntryDict
from .service_statistics import ServiceStatistics, ServiceStatisticsDict


class Service(SdkBaseModel):
    reference_id: Optional[int] = Field(default=UNSET, alias="ReferenceId")
    """Identifier for the service. Unique within the service map."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The canonical name of the service."""

    names: Optional[list[str]] = Field(default=UNSET, alias="Names")
    """A list of names for the service, including the canonical name."""

    root: Optional[bool] = Field(default=UNSET, alias="Root")
    """Indicates that the service was the first service to process a request."""

    account_id: Optional[str] = Field(default=UNSET, alias="AccountId")
    """Identifier of the Amazon Web Services account in which the service runs."""

    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The type of service. Amazon Web Services Resource - The type of an Amazon Web Services resource. For example,
    AWS::EC2::Instance for an application running on Amazon EC2 or AWS::DynamoDB::Table for an Amazon DynamoDB table
    that the application used. Amazon Web Services Service - The type of an Amazon Web Services service. For example,
    AWS::DynamoDB for downstream calls to Amazon DynamoDB that didn't target a specific table. client - Represents the
    clients that sent requests to a root service. remote - A downstream service of indeterminate type."""

    state: Optional[str] = Field(default=UNSET, alias="State")
    """The service's state."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The start time of the first segment that the service generated."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The end time of the last segment that the service generated."""

    edges: Optional[list[Edge]] = Field(default=UNSET, alias="Edges")
    """Connections to downstream services."""

    summary_statistics: Optional[ServiceStatistics] = Field(default=UNSET, alias="SummaryStatistics")
    duration_histogram: Optional[list[HistogramEntry]] = Field(default=UNSET, alias="DurationHistogram")
    """A histogram that maps the spread of service durations."""

    response_time_histogram: Optional[list[HistogramEntry]] = Field(default=UNSET, alias="ResponseTimeHistogram")
    """A histogram that maps the spread of service response times."""


class ServiceDict(TypedDict):
    reference_id: NotRequired[int]
    name: NotRequired[str]
    names: NotRequired[list[str]]
    root: NotRequired[bool]
    account_id: NotRequired[str]
    type_: NotRequired[str]
    state: NotRequired[str]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    edges: NotRequired[list[EdgeDict]]
    summary_statistics: NotRequired[ServiceStatisticsDict]
    duration_histogram: NotRequired[list[HistogramEntryDict]]
    response_time_histogram: NotRequired[list[HistogramEntryDict]]
