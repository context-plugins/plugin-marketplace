from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DateInfo(SdkBaseModel):
    format: OptionalNullable[str] = UNSET
    type_: OptionalNullable[str] = Field(default=UNSET, alias="type")


class DateInfoDict(TypedDict):
    format: NotRequired[str | None]
    type_: NotRequired[str | None]
