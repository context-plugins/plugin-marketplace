from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.call_status import CallStatusOrStr


class OriginateResponse(SdkBaseModel):
    call_id: Optional[str] = Field(default=UNSET, alias="callId")
    status: Optional[CallStatusOrStr] = UNSET
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")


class OriginateResponseDict(TypedDict):
    call_id: NotRequired[str]
    status: NotRequired[CallStatusOrStr]
    created_at: NotRequired[RFC3339DateTime]
