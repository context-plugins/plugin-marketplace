from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class XPostMediaItem(SdkBaseModel):
    media_url_https: str = Field(alias="mediaUrlHttps")


class XPostMediaItemDict(TypedDict):
    media_url_https: str
