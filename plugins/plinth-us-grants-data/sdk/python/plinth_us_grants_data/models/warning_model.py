from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity import SeverityOrStr


class WarningModel(SdkBaseModel):
    parameter: Optional[str] = UNSET
    severity: Optional[SeverityOrStr] = UNSET
    reason: Optional[str] = UNSET


class WarningModelDict(TypedDict):
    parameter: NotRequired[str]
    severity: NotRequired[SeverityOrStr]
    reason: NotRequired[str]
