from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class UpdateLabel(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    """The new name of the label."""

    description: Optional[str] = UNSET
    """The new description of the label."""

    color: OptionalNullable[str] = UNSET
    """The hex color to be displayed with the Label (for example, "#ff0000")."""

    archived: Optional[bool] = UNSET
    """A true/false boolean indicating if the Label has been archived."""


class UpdateLabelDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    color: NotRequired[str | None]
    archived: NotRequired[bool]
