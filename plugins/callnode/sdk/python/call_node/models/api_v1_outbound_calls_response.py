from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .call import Call, CallDict


class ApiV1OutboundCallsResponse(SdkBaseModel):
    calls: Optional[list[Call]] = UNSET
    next_cursor: OptionalNullable[str] = Field(default=UNSET, alias="nextCursor")
    """Pass as ``cursor`` to fetch the next page. Null on the last page."""


class ApiV1OutboundCallsResponseDict(TypedDict):
    calls: NotRequired[list[CallDict]]
    next_cursor: NotRequired[str | None]
