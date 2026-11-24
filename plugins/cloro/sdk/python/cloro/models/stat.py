from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Stat(SdkBaseModel):
    label: Optional[str] = UNSET
    """Stat label"""

    value: Optional[str] = UNSET
    """Stat value"""


class StatDict(TypedDict):
    label: NotRequired[str]
    value: NotRequired[str]
