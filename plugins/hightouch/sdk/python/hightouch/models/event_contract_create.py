from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.on_undeclared_schema2 import OnUndeclaredSchema2OrStr
from .event2 import Event2, Event2Dict


class EventContractCreate(SdkBaseModel):
    """The input for creating a Contract"""

    model_config = ConfigDict(extra="forbid")

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


class EventContractCreateDict(TypedDict):
    name: str
    slug: NotRequired[str]
    description: NotRequired[str]
    on_undeclared_schema: NotRequired[OnUndeclaredSchema2OrStr]
    events: NotRequired[list[Event2Dict]]
