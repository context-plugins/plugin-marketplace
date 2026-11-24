from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.call_status import CallStatusOrStr


class ApiV1OutboundCallsResponse1(SdkBaseModel):
    call_id: Optional[str] = Field(default=UNSET, alias="callId")
    status: Optional[CallStatusOrStr] = UNSET


class ApiV1OutboundCallsResponse1Dict(TypedDict):
    call_id: NotRequired[str]
    status: NotRequired[CallStatusOrStr]
