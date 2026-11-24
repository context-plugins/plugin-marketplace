from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .fax import Fax, FaxDict


class ApiV1FaxesResponse(SdkBaseModel):
    data: Optional[list[Fax]] = UNSET
    next_cursor: OptionalNullable[str] = Field(default=UNSET, alias="nextCursor")


class ApiV1FaxesResponseDict(TypedDict):
    data: NotRequired[list[FaxDict]]
    next_cursor: NotRequired[str | None]
