from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .details import Details, DetailsDict
from .enums.code1 import Code1OrStr


class Error1(SdkBaseModel):
    code: Optional[Code1OrStr] = UNSET
    message: Optional[str] = UNSET
    details: Optional[Details] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class Error1Dict(TypedDict):
    code: NotRequired[Code1OrStr]
    message: NotRequired[str]
    details: NotRequired[DetailsDict]
    timestamp: NotRequired[RFC3339DateTime]
