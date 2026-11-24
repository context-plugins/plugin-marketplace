from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HostnameListRequest(SdkBaseModel):
    """Replaces both lists. Send [] to clear one."""

    allowed: Optional[list[str]] = UNSET
    blocked: Optional[list[str]] = UNSET


class HostnameListRequestDict(TypedDict):
    allowed: NotRequired[list[str]]
    blocked: NotRequired[list[str]]
