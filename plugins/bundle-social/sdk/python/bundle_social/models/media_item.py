from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MediaItem(SdkBaseModel):
    upload_id: str = Field(alias="uploadId")
    alt_text: OptionalNullable[str] = Field(default=UNSET, alias="altText")
    """Alternative text for the image, used by screen readers. Applies to images/GIFs only."""


class MediaItemDict(TypedDict):
    upload_id: str
    alt_text: NotRequired[str | None]
