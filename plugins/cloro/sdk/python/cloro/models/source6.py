from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source6(SdkBaseModel):
    position: Optional[float] = UNSET
    """The position index of the source in the response"""

    url: Optional[str] = UNSET
    """The URL of the source"""

    label: Optional[str] = UNSET
    """The display label for the source"""

    description: Optional[str] = UNSET
    """A description of the source content"""

    preview: Optional[str] = UNSET
    """Preview text snippet from the source"""

    search_engine_text: Optional[str] = Field(default=UNSET, alias="searchEngineText")
    """Search engine display text"""

    site_name: Optional[str] = Field(default=UNSET, alias="siteName")
    """Website name"""

    metadata_title: Optional[str] = Field(default=UNSET, alias="metadataTitle")
    """Source metadata title"""

    creator: Optional[str] = UNSET
    """Content creator/author"""

    image: Optional[str] = UNSET
    """Source image URL"""

    favicon: Optional[str] = UNSET
    """Website favicon URL"""


class Source6Dict(TypedDict):
    position: NotRequired[float]
    url: NotRequired[str]
    label: NotRequired[str]
    description: NotRequired[str]
    preview: NotRequired[str]
    search_engine_text: NotRequired[str]
    site_name: NotRequired[str]
    metadata_title: NotRequired[str]
    creator: NotRequired[str]
    image: NotRequired[str]
    favicon: NotRequired[str]
