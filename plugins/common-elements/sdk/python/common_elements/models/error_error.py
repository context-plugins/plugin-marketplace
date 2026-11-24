from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.error1 import Error1OrStr


class ErrorError(SdkBaseModel):
    ok: Literal["False"] = "False"
    error: Error1OrStr
    """Stable machine-readable code. Switch on this, not on the message."""

    message: str
    """Human-readable detail. Wording may change; the code will not."""

    docs_url: Optional[str] = UNSET
    """Where this code is explained in full. Present on the meta namespace."""

    next_steps: Optional[str] = UNSET
    """What to do about it. Present on the meta namespace."""


class ErrorErrorDict(TypedDict):
    ok: Literal["False"]
    error: Error1OrStr
    message: str
    docs_url: NotRequired[str]
    next_steps: NotRequired[str]
