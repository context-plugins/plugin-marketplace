from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Icon(SdkBaseModel):
    """An icon for display in user interfaces."""

    src: str
    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    sizes: Optional[list[str]] = UNSET


class IconDict(TypedDict):
    src: str
    mime_type: NotRequired[str]
    sizes: NotRequired[list[str]]
