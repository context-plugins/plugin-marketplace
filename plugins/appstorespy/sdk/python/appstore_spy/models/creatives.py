from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .app_creative_video import AppCreativeVideo, AppCreativeVideoDict
from .image import Image, ImageDict
from .unions.network import Network, NetworkDict


class Creatives(SdkBaseModel):
    video: AppCreativeVideo
    image: Image
    fb: list[str]
    network: Network


class CreativesDict(TypedDict):
    video: AppCreativeVideoDict
    image: ImageDict
    fb: list[str]
    network: NetworkDict
