from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiErrorError(SdkBaseModel):
    """Every failure answers with this envelope; ``message`` is safe to show a user."""

    code: int
    message: str


class ApiErrorErrorDict(TypedDict):
    code: int
    message: str
