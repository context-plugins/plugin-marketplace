from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .call_record import CallRecord, CallRecordDict


class ApiV1CallsResponse1(SdkBaseModel):
    call: Optional[CallRecord] = UNSET
    """A finished or in-progress call on one of your numbers."""


class ApiV1CallsResponse1Dict(TypedDict):
    call: NotRequired[CallRecordDict]
