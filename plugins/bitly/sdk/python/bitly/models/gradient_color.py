from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GradientColor(SdkBaseModel):
    color: Optional[str] = UNSET
    """A color in hexadecimal format to be used in one of the gradient's <stop> elements"""

    offset: int = 0
    """A number between 0-100 denoting the offset of the gradient color, interpreted as a percentage"""


class GradientColorDict(TypedDict):
    color: NotRequired[str]
    offset: NotRequired[int]
