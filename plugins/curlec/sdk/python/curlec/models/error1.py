from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error1(SdkBaseModel):
    code: Optional[str] = UNSET
    """Error code. Examples: BAD_REQUEST_ERROR, GATEWAY_ERROR, SERVER_ERROR."""

    description: Optional[str] = UNSET
    source: Optional[str] = UNSET
    """Where the error originated (e.g. business, gateway)."""

    step: Optional[str] = UNSET
    reason: Optional[str] = UNSET
    """Machine-readable reason. Examples: insufficient_funds, invalid_expiry_date, declined_by_bank."""

    metadata: Optional[Any] = UNSET
    field: Optional[str] = UNSET


class Error1Dict(TypedDict):
    code: NotRequired[str]
    description: NotRequired[str]
    source: NotRequired[str]
    step: NotRequired[str]
    reason: NotRequired[str]
    metadata: NotRequired[Any]
    field: NotRequired[str]
