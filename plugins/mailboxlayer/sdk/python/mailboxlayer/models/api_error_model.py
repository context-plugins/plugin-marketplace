from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class ApiErrorModel(SdkBaseModel):
    """Standard error payload returned by Mailboxlayer when a request fails."""

    success: bool
    """Always false for error responses."""

    error: Error


class ApiErrorModelDict(TypedDict):
    success: bool
    error: ErrorDict
