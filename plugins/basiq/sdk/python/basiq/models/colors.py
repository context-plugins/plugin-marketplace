from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Colors(SdkBaseModel):
    """Colors contains institution colors type"""

    primary: Optional[str] = UNSET
    """Primary primary institution color"""


class ColorsDict(TypedDict):
    primary: NotRequired[str]
