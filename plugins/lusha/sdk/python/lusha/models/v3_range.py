from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3Range(SdkBaseModel):
    """Numeric range filter"""

    min: Optional[int] = UNSET
    max: Optional[int] = UNSET


class V3RangeDict(TypedDict):
    min: NotRequired[int]
    max: NotRequired[int]
