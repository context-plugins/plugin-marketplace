from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Image1(SdkBaseModel):
    """Screenshot of the requested URL."""

    data: Optional[str] = UNSET
    """Image data in format determined by the mime type. Currently, the format will always be "image/png", but this
    might change in the future."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """The mime-type of the image data."""


class Image1Dict(TypedDict):
    data: NotRequired[str]
    mime_type: NotRequired[str]
