from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.data_source1 import DataSource1OrStr
from .enums.event_class1 import EventClass1OrStr
from .event_time_range import EventTimeRange, EventTimeRangeDict
from .resource_collection import ResourceCollection, ResourceCollectionDict


class ListEventsFilters(SdkBaseModel):
    insight_id: Optional[str] = Field(default=UNSET, alias="InsightId")
    """An ID of an insight that is related to the events you want to filter for."""

    event_time_range: Optional[EventTimeRange] = Field(default=UNSET, alias="EventTimeRange")
    event_class: Optional[EventClass1OrStr] = Field(default=UNSET, alias="EventClass")
    """The class of the events you want to filter for, such as an infrastructure change, a deployment, or a schema
    change."""

    event_source: Optional[str] = Field(default=UNSET, alias="EventSource")
    """The Amazon Web Services source that emitted the events you want to filter for."""

    data_source: Optional[DataSource1OrStr] = Field(default=UNSET, alias="DataSource")
    """The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, of the events you want returned."""

    resource_collection: Optional[ResourceCollection] = Field(default=UNSET, alias="ResourceCollection")


class ListEventsFiltersDict(TypedDict):
    insight_id: NotRequired[str]
    event_time_range: NotRequired[EventTimeRangeDict]
    event_class: NotRequired[EventClass1OrStr]
    event_source: NotRequired[str]
    data_source: NotRequired[DataSource1OrStr]
    resource_collection: NotRequired[ResourceCollectionDict]
