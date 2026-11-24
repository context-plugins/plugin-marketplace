from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.data_source import DataSourceOrStr
from .enums.event_class import EventClassOrStr
from .event_resource import EventResource, EventResourceDict
from .resource_collection import ResourceCollection, ResourceCollectionDict


class Event(SdkBaseModel):
    resource_collection: Optional[ResourceCollection] = Field(default=UNSET, alias="ResourceCollection")
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The ID of the event."""

    time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="Time")
    """A Timestamp that specifies the time the event occurred."""

    event_source: Optional[str] = Field(default=UNSET, alias="EventSource")
    """The Amazon Web Services source that emitted the event."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the event."""

    data_source: Optional[DataSourceOrStr] = Field(default=UNSET, alias="DataSource")
    """The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, where DevOps Guru analysis found the event."""

    event_class: Optional[EventClassOrStr] = Field(default=UNSET, alias="EventClass")
    """The class of the event. The class specifies what the event is related to, such as an infrastructure change, a
    deployment, or a schema change."""

    resources: Optional[list[EventResource]] = Field(default=UNSET, alias="Resources")
    """An EventResource object that contains information about the resource that emitted the event."""


class EventDict(TypedDict):
    resource_collection: NotRequired[ResourceCollectionDict]
    id: NotRequired[str]
    time: NotRequired[RFC3339DateTime]
    event_source: NotRequired[str]
    name: NotRequired[str]
    data_source: NotRequired[DataSourceOrStr]
    event_class: NotRequired[EventClassOrStr]
    resources: NotRequired[list[EventResourceDict]]
