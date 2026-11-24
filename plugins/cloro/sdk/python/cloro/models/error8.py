from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .details3 import Details3, Details3Dict


class Error8(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET
    details: Optional[Details3] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class Error8Dict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    details: NotRequired[Details3Dict]
    timestamp: NotRequired[RFC3339DateTime]
