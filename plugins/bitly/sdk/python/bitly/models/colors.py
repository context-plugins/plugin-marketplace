from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Colors(SdkBaseModel):
    """An object of named colors denoting which color should go to which area of the frame"""

    primary: Optional[str] = UNSET
    """The primary color of the frame in hex code format"""

    secondary: Optional[str] = UNSET
    """The secondary color of the frame in hex code format"""

    background: Optional[str] = UNSET
    """The background color of the frame in hex code format"""


class ColorsDict(TypedDict):
    primary: NotRequired[str]
    secondary: NotRequired[str]
    background: NotRequired[str]
