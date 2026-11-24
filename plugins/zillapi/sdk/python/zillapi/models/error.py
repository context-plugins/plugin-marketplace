from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    code: str
    """Stable, machine-matchable error code (e.g. missing_input, invalid_filters, invalid_search_url). Match on code,
    never on message."""

    message: str
    """Human-readable message; may evolve. Do not match on this."""

    details: Optional[Any] = UNSET
    request_id: Optional[str] = UNSET


class ErrorDict(TypedDict):
    code: str
    message: str
    details: NotRequired[Any]
    request_id: NotRequired[str]
