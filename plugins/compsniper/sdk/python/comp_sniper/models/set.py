from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Set(SdkBaseModel):
    heading_id: Optional[str] = Field(default=UNSET, alias="headingId")
    name: Optional[str] = UNSET
    year: OptionalNullable[str] = UNSET
    graded_total: OptionalNullable[int] = Field(default=UNSET, alias="gradedTotal")


class SetDict(TypedDict):
    heading_id: NotRequired[str]
    name: NotRequired[str]
    year: NotRequired[str | None]
    graded_total: NotRequired[int | None]
