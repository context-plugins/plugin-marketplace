from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .image import Image, ImageDict


class RecognizeCelebritiesRequest(SdkBaseModel):
    image: Image = Field(alias="Image")


class RecognizeCelebritiesRequestDict(TypedDict):
    image: ImageDict
