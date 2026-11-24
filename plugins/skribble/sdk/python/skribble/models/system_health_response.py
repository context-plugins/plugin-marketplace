from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SystemHealthResponse(SdkBaseModel):
    """System Health."""

    status: Optional[str] = UNSET
    groups: Optional[list[str]] = UNSET


class SystemHealthResponseDict(TypedDict):
    status: NotRequired[str]
    groups: NotRequired[list[str]]
