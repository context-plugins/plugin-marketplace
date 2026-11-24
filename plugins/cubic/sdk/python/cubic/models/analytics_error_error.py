from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AnalyticsErrorError(SdkBaseModel):
    error: str
    """An explanation of the failure."""

    details: Optional[Any] = UNSET
    """Optional validation or error details. The shape depends on the failure."""


class AnalyticsErrorErrorDict(TypedDict):
    error: str
    details: NotRequired[Any]
