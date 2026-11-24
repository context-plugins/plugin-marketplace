from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.order import OrderOrStr


class Sort(SdkBaseModel):
    by: Optional[str] = UNSET
    """Field to sort by (e.g. ``score``)."""

    order: Optional[OrderOrStr] = UNSET


class SortDict(TypedDict):
    by: NotRequired[str]
    order: NotRequired[OrderOrStr]
