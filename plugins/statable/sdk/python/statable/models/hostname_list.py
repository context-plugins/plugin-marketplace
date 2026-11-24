from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HostnameList(SdkBaseModel):
    """The stored lists, as GET returns them. Both keys are always present; an empty list is []."""

    allowed: list[str]
    blocked: list[str]


class HostnameListDict(TypedDict):
    allowed: list[str]
    blocked: list[str]
