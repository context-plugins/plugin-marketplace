from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.state import StateOrStr


class SslInspectionStateBody(SdkBaseModel):
    """Set a custom SSL inspection state on a policy."""

    state: StateOrStr
    """The state of SSL inspection for this policy."""


class SslInspectionStateBodyDict(TypedDict):
    state: StateOrStr
