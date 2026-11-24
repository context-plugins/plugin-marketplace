from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .attribute1 import Attribute1, Attribute1Dict


class ApiV1MiscGoogleBusinessLocationAttributesRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    team_id: str = Field(alias="teamId")
    attribute_mask: Optional[str] = Field(default=UNSET, alias="attributeMask")
    attributes: OptionalNullable[list[Attribute1]] = UNSET


class ApiV1MiscGoogleBusinessLocationAttributesRequestDict(TypedDict):
    team_id: str
    attribute_mask: NotRequired[str]
    attributes: NotRequired[list[Attribute1Dict] | None]
