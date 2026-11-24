from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1VinocrRequest(SdkBaseModel):
    image_url: str
    """URL to an image, or the base64 string of the image."""


class V1VinocrRequestDict(TypedDict):
    image_url: str
