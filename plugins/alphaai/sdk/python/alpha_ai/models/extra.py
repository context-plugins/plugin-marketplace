from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason1 import Reason1OrStr


class Extra(SdkBaseModel):
    reason: Optional[Reason1OrStr] = UNSET


class ExtraDict(TypedDict):
    reason: NotRequired[Reason1OrStr]
