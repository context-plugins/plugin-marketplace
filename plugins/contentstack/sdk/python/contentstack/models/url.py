from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Url(SdkBaseModel):
    url: Optional[str] = UNSET
    """The URL for the environment."""

    locale: Optional[str] = UNSET
    """The locale associated with this URL."""


class UrlDict(TypedDict):
    url: NotRequired[str]
    locale: NotRequired[str]
