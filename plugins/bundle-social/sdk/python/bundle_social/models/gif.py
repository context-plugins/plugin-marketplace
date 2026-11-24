from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.provider import Provider, ProviderOrStr


class Gif(SdkBaseModel):
    gif_id: str = Field(alias="gifId")
    provider: ProviderOrStr = Provider.GIPHY


class GifDict(TypedDict):
    gif_id: str
    provider: NotRequired[ProviderOrStr]
