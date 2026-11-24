from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr


class WmxSitemapContent(SdkBaseModel):
    """Information about the various content types in the sitemap."""

    submitted: Optional[str] = UNSET
    """The number of URLs in the sitemap (of the content type)."""

    indexed: Optional[str] = UNSET
    """*Deprecated; do not use.*"""

    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")
    """The specific type of content in this sitemap. For example: ``web``."""


class WmxSitemapContentDict(TypedDict):
    submitted: NotRequired[str]
    indexed: NotRequired[str]
    type_: NotRequired[Type1OrStr]
