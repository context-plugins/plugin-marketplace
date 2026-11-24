from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class EpicState(SdkBaseModel):
    """Epic State is any of the at least 3 columns. Epic States correspond to one of 3 types: Unstarted, Started, or
    Done."""

    model_config = ConfigDict(extra="forbid")

    description: str
    """The description of what sort of Epics belong in that Epic State."""

    entity_type: str
    """A string description of this resource."""

    color: Optional[str] = UNSET
    """The hex color for this Epic State."""

    name: str
    """The Epic State's name."""

    global_id: str
    type_: str = Field(alias="type")
    """The type of Epic State (Unstarted, Started, or Done)"""

    updated_at: RFC3339DateTime
    """When the Epic State was last updated."""

    id: int
    """The unique ID of the Epic State."""

    position: int
    """The position that the Epic State is in, starting with 0 at the left."""

    created_at: RFC3339DateTime
    """The time/date the Epic State was created."""


class EpicStateDict(TypedDict):
    description: str
    entity_type: str
    color: NotRequired[str]
    name: str
    global_id: str
    type_: str
    updated_at: RFC3339DateTime
    id: int
    position: int
    created_at: RFC3339DateTime
