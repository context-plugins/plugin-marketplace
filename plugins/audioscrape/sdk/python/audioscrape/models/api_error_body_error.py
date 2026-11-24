from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .usage_info2 import UsageInfo2, UsageInfo2Dict


class ApiErrorBodyError(SdkBaseModel):
    code: str
    """Stable machine-readable error code (UPPERCASE_SNAKE_CASE)."""

    message: str
    """Human-readable error message."""

    usage: OptionalNullable[UsageInfo2] = UNSET


class ApiErrorBodyErrorDict(TypedDict):
    code: str
    message: str
    usage: NotRequired[UsageInfo2Dict | None]
