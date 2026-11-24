from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error1 import Error1, Error1Dict


class Error(SdkBaseModel):
    """Structured error envelope."""

    error: Error1


class ErrorDict(TypedDict):
    error: Error1Dict
