from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Value(SdkBaseModel):
    previous: Optional[str] = UNSET
    """Previous value"""

    current: Optional[str] = UNSET
    """Current value"""


class ValueDict(TypedDict):
    previous: NotRequired[str]
    current: NotRequired[str]
