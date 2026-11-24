from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.on_undeclared_schema import OnUndeclaredSchemaOrStr
from .event import Event, EventDict
from .event_domain_component import EventDomainComponent, EventDomainComponentDict


class EventDomainCreate(SdkBaseModel):
    """The input for creating a Domain"""

    model_config = ConfigDict(extra="forbid")

    name: str
    """The domain's name"""

    slug: Optional[str] = UNSET
    """The domain's slug. If not specified, one will be generated."""

    description: Optional[str] = UNSET
    """The domain's description"""

    on_undeclared_schema: Optional[OnUndeclaredSchemaOrStr] = Field(default=UNSET, alias="onUndeclaredSchema")
    """What happens to events that aren't defined in the domain. One of ALLOW_EVENT or BLOCK_EVENT. Optional, defaults
    to ALLOW_EVENT."""

    events: Optional[list[Event]] = UNSET
    """The definitions for the events in the domain."""

    components: Optional[list[EventDomainComponent]] = UNSET
    """The reusable components defined in the domain."""


class EventDomainCreateDict(TypedDict):
    name: str
    slug: NotRequired[str]
    description: NotRequired[str]
    on_undeclared_schema: NotRequired[OnUndeclaredSchemaOrStr]
    events: NotRequired[list[EventDict]]
    components: NotRequired[list[EventDomainComponentDict]]
