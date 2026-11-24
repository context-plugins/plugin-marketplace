from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source(SdkBaseModel):
    characters: Optional[int] = UNSET
    """Characters scored (and billed)."""

    content_type: Optional[str] = UNSET
    title: Optional[str] = UNSET
    truncated: Optional[bool] = UNSET
    """Part of the page or document was not scored (over 2MB of HTML, 15MB of document, or 200,000 characters)."""

    url: Optional[str] = UNSET
    """Final URL after redirects."""


class SourceDict(TypedDict):
    characters: NotRequired[int]
    content_type: NotRequired[str]
    title: NotRequired[str]
    truncated: NotRequired[bool]
    url: NotRequired[str]
