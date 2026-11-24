from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr


class V3ItemError(SdkBaseModel):
    """Per-item error in a batch response"""

    code: Optional[CodeOrStr] = UNSET
    message: Optional[str] = UNSET


class V3ItemErrorDict(TypedDict):
    code: NotRequired[CodeOrStr]
    message: NotRequired[str]
