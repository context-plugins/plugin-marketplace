from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Jpeg(SdkBaseModel):
    url: Optional[str] = UNSET
    width: Optional[int] = UNSET


class JpegDict(TypedDict):
    url: NotRequired[str]
    width: NotRequired[int]
