from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Category(SdkBaseModel):
    """A Category can be used to associate Objectives."""

    model_config = ConfigDict(extra="forbid")

    archived: bool
    """A true/false boolean indicating if the Category has been archived."""

    entity_type: str
    """A string description of this resource."""

    color: str | None
    """The hex color to be displayed with the Category (for example, "#ff0000")."""

    name: str
    """The name of the Category."""

    global_id: str
    """The Global ID of the Category."""

    type_: str = Field(alias="type")
    """The type of entity this Category is associated with; currently Milestone or Objective is the only type of
    Category."""

    updated_at: RFC3339DateTime
    """The time/date that the Category was updated."""

    external_id: str | None
    """This field can be set to another unique ID. In the case that the Category has been imported from another tool,
    the ID in the other tool can be indicated here."""

    id: int
    """The unique ID of the Category."""

    created_at: RFC3339DateTime
    """The time/date that the Category was created."""


class CategoryDict(TypedDict):
    archived: bool
    entity_type: str
    color: str | None
    name: str
    global_id: str
    type_: str
    updated_at: RFC3339DateTime
    external_id: str | None
    id: int
    created_at: RFC3339DateTime
