from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FileInputSource2(SdkBaseModel):
    """Inline file source."""

    content: Optional[str] = UNSET
    """Required. The file's byte contents."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. The file's display name."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """Required. The file's mime type."""


class FileInputSource2Dict(TypedDict):
    content: NotRequired[str]
    display_name: NotRequired[str]
    mime_type: NotRequired[str]
