from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Item2(SdkBaseModel):
    heading_id: Optional[str] = Field(default=UNSET, alias="headingId")
    name: Optional[str] = UNSET
    year: OptionalNullable[str] = UNSET
    url: Optional[str] = UNSET
    graded_total: OptionalNullable[int] = Field(default=UNSET, alias="gradedTotal")


class Item2Dict(TypedDict):
    heading_id: NotRequired[str]
    name: NotRequired[str]
    year: NotRequired[str | None]
    url: NotRequired[str]
    graded_total: NotRequired[int | None]
