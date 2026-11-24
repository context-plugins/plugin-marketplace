from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.loa_content_type import LoaContentTypeOrStr


class Loa(SdkBaseModel):
    loa_content: Optional[str] = Field(default=UNSET, alias="loaContent")
    """The binary contents of the LOA-CFA document."""

    loa_content_type: Optional[LoaContentTypeOrStr] = Field(default=UNSET, alias="loaContentType")
    """The standard media type for the LOA-CFA document. The only supported value is application/pdf."""


class LoaDict(TypedDict):
    loa_content: NotRequired[str]
    loa_content_type: NotRequired[LoaContentTypeOrStr]
