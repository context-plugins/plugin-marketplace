from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ValidationException1(SdkBaseModel):
    message: str
    """Errors overview."""

    errors: dict[str, Any]
    """A detailed description of each field that failed validation."""


class ValidationException1Dict(TypedDict):
    message: str
    errors: dict[str, Any]
