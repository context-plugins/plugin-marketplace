from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Link(SdkBaseModel):
    href: str
    """The URL of the link."""

    target: Optional[str] = UNSET
    """The target of the link (e.g., _blank)."""


class LinkDict(TypedDict):
    href: str
    target: NotRequired[str]
