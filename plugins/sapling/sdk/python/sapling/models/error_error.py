from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorError(SdkBaseModel):
    msg: str
    """Human-readable error message."""


class ErrorErrorDict(TypedDict):
    msg: str
