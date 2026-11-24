from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.capability import CapabilityOrStr
from .unions.audience1 import Audience1, Audience1Dict


class ApiV1ReportsShareRequest(SdkBaseModel):
    audience: list[Audience1]
    capability: Optional[CapabilityOrStr] = UNSET


class ApiV1ReportsShareRequestDict(TypedDict):
    audience: list[Audience1Dict]
    capability: NotRequired[CapabilityOrStr]
