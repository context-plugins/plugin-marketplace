from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filtering_attribute import FilteringAttribute, FilteringAttributeDict


class EventType(SdkBaseModel):
    """A representation of the event type resource."""

    event_schema_uri: Optional[str] = Field(default=UNSET, alias="eventSchemaUri")
    """Output only. URI for the event schema. For example
    "https://github.com/googleapis/google-cloudevents/blob/master/proto/google/events/cloud/storage/v1/events.proto"
    """

    filtering_attributes: Optional[list[FilteringAttribute]] = Field(default=UNSET, alias="filteringAttributes")
    """Output only. Filtering attributes for the event type."""

    description: Optional[str] = UNSET
    """Output only. Human friendly description of what the event type is about. For example "Bucket created in Cloud
    Storage"."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Output only. The full name of the event type (for example, "google.cloud.storage.object.v1.finalized"). In the
    form of {provider-specific-prefix}.{resource}.{version}.{verb}. Types MUST be versioned and event schemas are
    guaranteed to remain backward compatible within one version. Note that event type versions and API versions do not
    need to match."""


class EventTypeDict(TypedDict):
    event_schema_uri: NotRequired[str]
    filtering_attributes: NotRequired[list[FilteringAttributeDict]]
    description: NotRequired[str]
    type_: NotRequired[str]
