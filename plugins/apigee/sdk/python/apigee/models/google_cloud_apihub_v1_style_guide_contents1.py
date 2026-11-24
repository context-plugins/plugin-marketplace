from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1StyleGuideContents1(SdkBaseModel):
    """Required. Input only. The contents of the uploaded style guide."""

    contents: Optional[str] = UNSET
    """Required. The contents of the style guide."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """Required. The mime type of the content."""


class GoogleCloudApihubV1StyleGuideContents1Dict(TypedDict):
    contents: NotRequired[str]
    mime_type: NotRequired[str]
