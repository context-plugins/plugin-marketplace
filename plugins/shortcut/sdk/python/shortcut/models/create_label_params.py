from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateLabelParams(SdkBaseModel):
    """Request parameters for creating a Label on a Shortcut Story."""

    model_config = ConfigDict(extra="forbid")

    name: str
    """The name of the new Label."""

    description: Optional[str] = UNSET
    """The description of the new Label."""

    color: Optional[str] = UNSET
    """The hex color to be displayed with the Label (for example, "#ff0000")."""

    external_id: Optional[str] = UNSET
    """This field can be set to another unique ID. In the case that the Label has been imported from another tool, the
    ID in the other tool can be indicated here."""


class CreateLabelParamsDict(TypedDict):
    name: str
    description: NotRequired[str]
    color: NotRequired[str]
    external_id: NotRequired[str]
