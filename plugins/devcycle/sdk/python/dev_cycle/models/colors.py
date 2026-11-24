from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Colors(SdkBaseModel):
    primary: Optional[str] = UNSET
    """Primary color hex code"""

    secondary: Optional[str] = UNSET
    """Secondary color hex code"""


class ColorsDict(TypedDict):
    primary: NotRequired[str]
    secondary: NotRequired[str]
