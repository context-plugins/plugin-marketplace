from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mode import Mode, ModeOrStr


class ApiV1ApprovalsSessionsRequest(SdkBaseModel):
    approver: str
    mode: ModeOrStr = Mode.HOSTED
    origin: Optional[str] = UNSET
    return_url: Optional[str] = Field(default=UNSET, alias="returnUrl")
    expires_in: Optional[int] = Field(default=UNSET, alias="expiresIn")


class ApiV1ApprovalsSessionsRequestDict(TypedDict):
    approver: str
    mode: NotRequired[ModeOrStr]
    origin: NotRequired[str]
    return_url: NotRequired[str]
    expires_in: NotRequired[int]
