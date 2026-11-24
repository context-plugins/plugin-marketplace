from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Medium(SdkBaseModel):
    url: str
    width: Optional[int] = UNSET
    height: Optional[int] = UNSET


class MediumDict(TypedDict):
    url: str
    width: NotRequired[int]
    height: NotRequired[int]
