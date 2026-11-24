from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.field2 import Field2OrStr


class ApiV1MiscGoogleBusinessLocationServiceListRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    team_id: str = Field(alias="teamId")
    fields: list[Field2OrStr]
    service_items: OptionalNullable[list[Any]] = Field(default=UNSET, alias="serviceItems")


class ApiV1MiscGoogleBusinessLocationServiceListRequestDict(TypedDict):
    team_id: str
    fields: list[Field2OrStr]
    service_items: NotRequired[list[Any] | None]
