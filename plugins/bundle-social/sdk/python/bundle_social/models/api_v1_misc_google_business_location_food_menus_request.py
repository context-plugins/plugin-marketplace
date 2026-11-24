from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.field4 import Field4OrStr


class ApiV1MiscGoogleBusinessLocationFoodMenusRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    team_id: str = Field(alias="teamId")
    fields: list[Field4OrStr]
    menus: OptionalNullable[list[Any]] = UNSET


class ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict(TypedDict):
    team_id: str
    fields: list[Field4OrStr]
    menus: NotRequired[list[Any] | None]
