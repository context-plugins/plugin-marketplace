from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .branding import Branding, BrandingDict
from .enums.format4 import Format4OrStr
from .enums.input_format import InputFormat, InputFormatOrStr
from .page_setup import PageSetup, PageSetupDict


class V1ArtifactRequest(SdkBaseModel):
    content: str
    """The Markdown or HTML body to render. Up to ~4MB."""

    input_format: InputFormatOrStr = Field(default=InputFormat.MARKDOWN, alias="inputFormat")
    """How to interpret ``content``. 'markdown' is converted to styled HTML; 'html' is used as a body fragment."""

    formats: Optional[list[Format4OrStr]] = UNSET
    """Which artifact formats to produce. Each format charges 1 credit."""

    branding: Optional[Branding] = UNSET
    """Optional theme applied to the artifact header, body, and footer."""

    page_setup: Optional[PageSetup] = Field(default=UNSET, alias="pageSetup")
    """Optional paper/viewport setup for the PDF and PNG."""

    data: Optional[Any] = UNSET
    """Optional Mustache data. When present, ``content`` is rendered as a logic-less Mustache template (plus the
    branding fields) before conversion."""

    expires_in: int = Field(default=86400, alias="expiresIn")
    """Seconds until the hosted URLs expire (3600–2592000). Default 86400 (24h)."""


class V1ArtifactRequestDict(TypedDict):
    content: str
    input_format: NotRequired[InputFormatOrStr]
    formats: NotRequired[list[Format4OrStr]]
    branding: NotRequired[BrandingDict]
    page_setup: NotRequired[PageSetupDict]
    data: NotRequired[Any]
    expires_in: NotRequired[int]
