from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class ErrorEnvelopeError(SdkBaseModel):
    error: Error
    """The canonical error object (§6.4). ``code`` is the SINGLE source of truth for error sub-codes."""


class ErrorEnvelopeErrorDict(TypedDict):
    error: ErrorDict
