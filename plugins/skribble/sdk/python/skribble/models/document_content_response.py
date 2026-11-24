from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DocumentContentResponse(SdkBaseModel):
    """Document Content Response as JSON"""

    content_type: Optional[str] = UNSET
    content_size: Optional[int] = UNSET
    content: Optional[str] = UNSET
    """Base64 encoded bytes of the document."""


class DocumentContentResponseDict(TypedDict):
    content_type: NotRequired[str]
    content_size: NotRequired[int]
    content: NotRequired[str]
