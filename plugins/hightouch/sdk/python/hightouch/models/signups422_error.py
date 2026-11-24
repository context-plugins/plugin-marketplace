from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.message import MessageOrStr


class Signups422Error(SdkBaseModel):
    message: Optional[MessageOrStr] = UNSET
    code: Optional[str] = UNSET
    details: Optional[dict[str, Any]] = UNSET


class Signups422ErrorDict(TypedDict):
    message: NotRequired[MessageOrStr]
    code: NotRequired[str]
    details: NotRequired[dict[str, Any]]
