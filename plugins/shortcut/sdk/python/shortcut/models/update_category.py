from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class UpdateCategory(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    """The new name of the Category."""

    color: OptionalNullable[str] = UNSET
    """The hex color to be displayed with the Category (for example, "#ff0000")."""

    archived: Optional[bool] = UNSET
    """A true/false boolean indicating if the Category has been archived."""


class UpdateCategoryDict(TypedDict):
    name: NotRequired[str]
    color: NotRequired[str | None]
    archived: NotRequired[bool]
