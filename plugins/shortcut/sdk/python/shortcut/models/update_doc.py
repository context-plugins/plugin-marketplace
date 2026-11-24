from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_format2 import ContentFormat2OrStr


class UpdateDoc(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    title: Optional[str] = UNSET
    """The new title for the document"""

    content: Optional[str] = UNSET
    """The new content for the document."""

    content_format: Optional[ContentFormat2OrStr] = UNSET
    """Format of content. For input: specifies format of provided content (defaults to 'html'). For output: controls
    response format - 'markdown' (default) or 'html' to include HTML content."""


class UpdateDocDict(TypedDict):
    title: NotRequired[str]
    content: NotRequired[str]
    content_format: NotRequired[ContentFormat2OrStr]
