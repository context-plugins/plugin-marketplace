from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .jpeg import Jpeg, JpegDict
from .webp import Webp, WebpDict


class MixedSources(SdkBaseModel):
    jpeg: Optional[list[Jpeg]] = UNSET
    webp: Optional[list[Webp]] = UNSET


class MixedSourcesDict(TypedDict):
    jpeg: NotRequired[list[JpegDict]]
    webp: NotRequired[list[WebpDict]]
