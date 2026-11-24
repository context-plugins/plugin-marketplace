from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.msg import MsgOrStr


class ApiV1LivenessResponse(SdkBaseModel):
    msg: Optional[MsgOrStr] = UNSET


class ApiV1LivenessResponseDict(TypedDict):
    msg: NotRequired[MsgOrStr]
