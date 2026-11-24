from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1CallsTransferResponse(SdkBaseModel):
    call_id: Optional[str] = Field(default=UNSET, alias="callId")
    destination: Optional[str] = UNSET
    status: Optional[str] = UNSET


class ApiV1CallsTransferResponseDict(TypedDict):
    call_id: NotRequired[str]
    destination: NotRequired[str]
    status: NotRequired[str]
