from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Error(SdkBaseModel):
    msg: str
    """Human-readable error message."""


class ErrorDict(TypedDict):
    msg: str
