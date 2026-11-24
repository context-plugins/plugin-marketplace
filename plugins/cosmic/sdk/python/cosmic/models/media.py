from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .unions.size import Size, SizeDict


class Media(SdkBaseModel):
    """An image, file, or document in the Bucket."""

    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    """Unique file name within the Bucket. This is the value you assign to a File or Image Metafield."""

    original_name: Optional[str] = UNSET
    """The file name as uploaded."""

    size: Optional[Size] = UNSET
    """File size in bytes."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """MIME type."""

    bucket: Optional[str] = UNSET
    """Bucket id."""

    folder: OptionalNullable[str] = UNSET
    alt_text: OptionalNullable[str] = UNSET
    """Images only."""

    width: OptionalNullable[int] = UNSET
    """Pixel width. Images only."""

    height: OptionalNullable[int] = UNSET
    """Pixel height. Images only."""

    url: Optional[str] = UNSET
    """CDN URL."""

    imgix_url: Optional[str] = UNSET
    """imgix URL, which accepts image processing query parameters."""

    metadata: OptionalNullable[Any] = UNSET
    """Arbitrary JSON metadata you attach to the media."""

    created_at: Optional[RFC3339DateTime] = UNSET


class MediaDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    original_name: NotRequired[str]
    size: NotRequired[SizeDict]
    type_: NotRequired[str]
    bucket: NotRequired[str]
    folder: NotRequired[str | None]
    alt_text: NotRequired[str | None]
    width: NotRequired[int | None]
    height: NotRequired[int | None]
    url: NotRequired[str]
    imgix_url: NotRequired[str]
    metadata: NotRequired[Any | None]
    created_at: NotRequired[RFC3339DateTime]
