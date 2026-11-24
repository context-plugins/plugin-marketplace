from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status import StatusOrStr


class CheckResult(SdkBaseModel):
    """Result of a single check."""

    check_id: str = Field(alias="checkId")
    name: str
    status: StatusOrStr
    """Outcome of a single check."""

    message: str
    how_to_fix: str | None = Field(alias="howToFix")
    details: dict[str, Any]


class CheckResultDict(TypedDict):
    check_id: str
    name: str
    status: StatusOrStr
    message: str
    how_to_fix: str | None
    details: dict[str, Any]
