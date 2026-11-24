from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .call_record import CallRecord, CallRecordDict


class ApiV1CallsResponse(SdkBaseModel):
    calls: Optional[list[CallRecord]] = UNSET
    count: Optional[int] = UNSET
    next_before: OptionalNullable[str] = Field(default=UNSET, alias="nextBefore")
    """Pass as ``before`` to fetch older records. Null on the last page."""


class ApiV1CallsResponseDict(TypedDict):
    calls: NotRequired[list[CallRecordDict]]
    count: NotRequired[int]
    next_before: NotRequired[str | None]
