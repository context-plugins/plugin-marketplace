from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WarningModel(SdkBaseModel):
    """A non-fatal notice that part of the request was accepted but a specific item was silently skipped. Additive and
    non-breaking; clients may branch on ``code``."""

    resource: str
    """Entity kind the warning is about (e.g. "caller_id", "did")."""

    identifier: str
    """The value the client sent that was skipped."""

    code: str
    """Stable machine-readable token for the reason."""

    message: str
    """Human-readable explanation."""


class WarningModelDict(TypedDict):
    resource: str
    identifier: str
    code: str
    message: str
