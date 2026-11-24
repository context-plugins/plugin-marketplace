from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_format1 import ContentFormat1OrStr


class CreateDoc(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    title: str
    """The title for the new document."""

    content: str
    """The content for the new document."""

    content_format: Optional[ContentFormat1OrStr] = UNSET
    """Format of the content being sent. Defaults to 'html'. If 'markdown', content will be converted to HTML for
    storage. Storage is always HTML; this parameter just tells us what format you're sending."""


class CreateDocDict(TypedDict):
    title: str
    content: str
    content_format: NotRequired[ContentFormat1OrStr]
