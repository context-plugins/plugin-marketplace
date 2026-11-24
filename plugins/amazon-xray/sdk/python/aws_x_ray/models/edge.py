from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .alias import Alias, AliasDict
from .edge_statistics import EdgeStatistics, EdgeStatisticsDict
from .histogram_entry import HistogramEntry, HistogramEntryDict


class Edge(SdkBaseModel):
    reference_id: Optional[int] = Field(default=UNSET, alias="ReferenceId")
    """Identifier of the edge. Unique within a service map."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The start time of the first segment on the edge."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The end time of the last segment on the edge."""

    summary_statistics: Optional[EdgeStatistics] = Field(default=UNSET, alias="SummaryStatistics")
    response_time_histogram: Optional[list[HistogramEntry]] = Field(default=UNSET, alias="ResponseTimeHistogram")
    """A histogram that maps the spread of client response times on an edge. Only populated for synchronous edges."""

    aliases: Optional[list[Alias]] = Field(default=UNSET, alias="Aliases")
    """Aliases for the edge."""

    edge_type: Optional[str] = Field(default=UNSET, alias="EdgeType")
    """Describes an asynchronous connection, with a value of link."""

    received_event_age_histogram: Optional[list[HistogramEntry]] = Field(
        default=UNSET, alias="ReceivedEventAgeHistogram"
    )
    """A histogram that maps the spread of event age when received by consumers. Age is calculated each time an event is
    received. Only populated when EdgeType is link."""


class EdgeDict(TypedDict):
    reference_id: NotRequired[int]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    summary_statistics: NotRequired[EdgeStatisticsDict]
    response_time_histogram: NotRequired[list[HistogramEntryDict]]
    aliases: NotRequired[list[AliasDict]]
    edge_type: NotRequired[str]
    received_event_age_histogram: NotRequired[list[HistogramEntryDict]]
