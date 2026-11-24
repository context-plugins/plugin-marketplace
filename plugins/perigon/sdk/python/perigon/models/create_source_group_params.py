from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CreateSourceGroupParams(SdkBaseModel):
    name: str
    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    description: OptionalNullable[str] = UNSET
    domains: list[str]


class CreateSourceGroupParamsDict(TypedDict):
    name: str
    display_name: NotRequired[str | None]
    description: NotRequired[str | None]
    domains: list[str]
