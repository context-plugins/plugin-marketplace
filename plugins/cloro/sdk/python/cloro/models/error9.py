from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .details4 import Details4, Details4Dict
from .enums.code1 import Code1OrStr


class Error9(SdkBaseModel):
    code: Optional[Code1OrStr] = UNSET
    message: Optional[str] = UNSET
    details: Optional[Details4] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class Error9Dict(TypedDict):
    code: NotRequired[Code1OrStr]
    message: NotRequired[str]
    details: NotRequired[Details4Dict]
    timestamp: NotRequired[RFC3339DateTime]
