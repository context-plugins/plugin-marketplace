from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content_type import ContentType, ContentTypeDict


class ContentTypeList(SdkBaseModel):
    """A paginated list of content types in the stack."""

    content_types: Optional[list[ContentType]] = UNSET
    """Array of content type objects."""

    count: Optional[int] = UNSET
    """Total count of content types when include_count is true."""


class ContentTypeListDict(TypedDict):
    content_types: NotRequired[list[ContentTypeDict]]
    count: NotRequired[int]
