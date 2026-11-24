from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content_type2 import ContentType2, ContentType2Dict


class ContentTypeList2(SdkBaseModel):
    """A list of content types."""

    content_types: Optional[list[ContentType2]] = UNSET
    """Array of content type objects."""


class ContentTypeList2Dict(TypedDict):
    content_types: NotRequired[list[ContentType2Dict]]
