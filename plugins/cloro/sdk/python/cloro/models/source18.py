from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source18(SdkBaseModel):
    position: int
    """1-based position of the source in this array"""

    label: str
    """Title of the source page. Can be an empty string."""

    url: str
    """URL of the source page"""

    description: Optional[str] = UNSET
    """Snippet that Bing shows for the source. Omitted when Bing shows none."""


class Source18Dict(TypedDict):
    position: int
    label: str
    url: str
    description: NotRequired[str]
