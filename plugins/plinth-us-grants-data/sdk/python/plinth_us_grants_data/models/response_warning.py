from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResponseWarning(SdkBaseModel):
    """A parameter we recognized but could not honor, named rather than silently dropped."""

    parameter: str
    severity: str
    """``caveat`` informs; anything else means a filter did NOT apply."""

    reason: str


class ResponseWarningDict(TypedDict):
    parameter: str
    severity: str
    reason: str
