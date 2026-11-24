from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.on_undeclared_schema import OnUndeclaredSchemaOrStr
from .event import Event, EventDict
from .event_domain_component import EventDomainComponent, EventDomainComponentDict
from .event_source import EventSource, EventSourceDict


class EventDomain(SdkBaseModel):
    """A collection of event and component schemas used for validating events."""

    model_config = ConfigDict(extra="forbid")

    id: str
    """The domain's id"""

    name: str
    """The domain's name"""

    slug: Optional[str] = UNSET
    """The domain's slug. If not specified, one will be generated."""

    description: Optional[str] = UNSET
    """The domain's description"""

    on_undeclared_schema: Optional[OnUndeclaredSchemaOrStr] = Field(default=UNSET, alias="onUndeclaredSchema")
    """What happens to events that aren't defined in the domain. One of ALLOW_EVENT or BLOCK_EVENT. Optional, defaults
    to ALLOW_EVENT."""

    schema_version_path: Optional[list[str]] = Field(default=UNSET, alias="schemaVersionPath")
    """Path into the event payload where the schema version is read/written. Used by codegen wrappers to inject the
    version they were generated from."""

    events: Optional[list[Event]] = UNSET
    """The definitions for the events in the domain."""

    components: Optional[list[EventDomainComponent]] = UNSET
    """The reusable components defined in the domain."""

    workspace_id: float = Field(alias="workspaceId")
    """The id of the workspace that the domain belongs to"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The timestamp when the domain was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The timestamp when the domain was last updated"""

    event_sources: list[EventSource] = Field(alias="eventSources")
    """The Event Sources linked to the Domain."""


class EventDomainDict(TypedDict):
    id: str
    name: str
    slug: NotRequired[str]
    description: NotRequired[str]
    on_undeclared_schema: NotRequired[OnUndeclaredSchemaOrStr]
    schema_version_path: NotRequired[list[str]]
    events: NotRequired[list[EventDict]]
    components: NotRequired[list[EventDomainComponentDict]]
    workspace_id: float
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    event_sources: list[EventSourceDict]
