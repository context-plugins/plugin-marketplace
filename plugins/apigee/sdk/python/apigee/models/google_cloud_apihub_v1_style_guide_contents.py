from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1StyleGuideContents(SdkBaseModel):
    """The style guide contents."""

    contents: Optional[str] = UNSET
    """Required. The contents of the style guide."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """Required. The mime type of the content."""


class GoogleCloudApihubV1StyleGuideContentsDict(TypedDict):
    contents: NotRequired[str]
    mime_type: NotRequired[str]
