from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.on_undeclared_schema2 import OnUndeclaredSchema2OrStr
from .event2 import Event2, Event2Dict
from .event_source import EventSource, EventSourceDict


class EventContract(SdkBaseModel):
    """A collection of schemas that are used for validating your events."""

    model_config = ConfigDict(extra="forbid")

    id: str
    """The contract's id"""

    name: str
    """The contract's name"""

    slug: Optional[str] = UNSET
    """The contract's slug. If not specified, one will be generated."""

    description: Optional[str] = UNSET
    """The contract's description"""

    on_undeclared_schema: Optional[OnUndeclaredSchema2OrStr] = Field(default=UNSET, alias="onUndeclaredSchema")
    """What happens to events that aren't defined in the contract. One of ALLOW_EVENT or BLOCK_EVENT. Optional, defaults
    to ALLOW_EVENT."""

    events: Optional[list[Event2]] = UNSET
    """The definitions for the events in the contract."""

    workspace_id: float = Field(alias="workspaceId")
    """The id of the workspace that the contract belongs to"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The timestamp when the contract was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The timestamp when the contract was last updated"""

    event_sources: list[EventSource] = Field(alias="eventSources")
    """The Event Sources linked to the Contract."""


class EventContractDict(TypedDict):
    id: str
    name: str
    slug: NotRequired[str]
    description: NotRequired[str]
    on_undeclared_schema: NotRequired[OnUndeclaredSchema2OrStr]
    events: NotRequired[list[Event2Dict]]
    workspace_id: float
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    event_sources: list[EventSourceDict]
