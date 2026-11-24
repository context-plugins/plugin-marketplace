from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Data3(SdkBaseModel):
    pdf_url: Optional[str] = Field(default=UNSET, alias="pdfUrl")
    """Signed URL of the rendered PDF (present when 'pdf' was requested)."""

    png_url: Optional[str] = Field(default=UNSET, alias="pngUrl")
    """Signed URL of the rendered PNG (present when 'png' was requested)."""

    share_url: Optional[str] = Field(default=UNSET, alias="shareUrl")
    """Signed URL of a hosted share page previewing the artifact."""

    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    """When the signed URLs expire."""


class Data3Dict(TypedDict):
    pdf_url: NotRequired[str]
    png_url: NotRequired[str]
    share_url: NotRequired[str]
    expires_at: NotRequired[RFC3339DateTime]
