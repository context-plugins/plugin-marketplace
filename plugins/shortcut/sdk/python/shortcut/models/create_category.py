from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateCategory(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """The name of the new Category."""

    color: Optional[str] = UNSET
    """The hex color to be displayed with the Category (for example, "#ff0000")."""

    external_id: Optional[str] = UNSET
    """This field can be set to another unique ID. In the case that the Category has been imported from another tool,
    the ID in the other tool can be indicated here."""

    type_: Optional[Any] = Field(default=UNSET, alias="type")
    """The type of entity this Category is associated with; currently Milestone or Objective is the only type of
    Category."""


class CreateCategoryDict(TypedDict):
    name: str
    color: NotRequired[str]
    external_id: NotRequired[str]
    type_: NotRequired[Any]
