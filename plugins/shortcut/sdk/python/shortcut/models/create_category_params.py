from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateCategoryParams(SdkBaseModel):
    """Request parameters for creating a Category with a Objective."""

    model_config = ConfigDict(extra="forbid")

    name: str
    """The name of the new Category."""

    color: Optional[str] = UNSET
    """The hex color to be displayed with the Category (for example, "#ff0000")."""

    external_id: Optional[str] = UNSET
    """This field can be set to another unique ID. In the case that the Category has been imported from another tool,
    the ID in the other tool can be indicated here."""


class CreateCategoryParamsDict(TypedDict):
    name: str
    color: NotRequired[str]
    external_id: NotRequired[str]
