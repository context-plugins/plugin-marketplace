from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class School(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    logo_url: OptionalNullable[str] = Field(default=UNSET, alias="logoUrl")
    name: OptionalNullable[str] = UNSET


class SchoolDict(TypedDict):
    id: NotRequired[str | None]
    logo_url: NotRequired[str | None]
    name: NotRequired[str | None]
