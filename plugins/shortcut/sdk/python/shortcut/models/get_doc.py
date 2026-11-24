from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_format import ContentFormatOrStr


class GetDoc(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    content_format: Optional[ContentFormatOrStr] = UNSET
    """Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in response."""


class GetDocDict(TypedDict):
    content_format: NotRequired[ContentFormatOrStr]
