from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Color(SdkBaseModel):
    category: Optional[str] = UNSET
    name: Optional[str] = UNSET


class ColorDict(TypedDict):
    category: NotRequired[str]
    name: NotRequired[str]
