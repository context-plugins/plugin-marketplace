from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlaterecognitionRequest(SdkBaseModel):
    image_url: str
    """URL to an image of a vehicle's license plate."""


class PlaterecognitionRequestDict(TypedDict):
    image_url: str
