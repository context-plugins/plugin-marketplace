from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .reversal import Reversal, ReversalDict


class TransfersReversalsResponse(SdkBaseModel):
    entity: Optional[str] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[Reversal]] = UNSET


class TransfersReversalsResponseDict(TypedDict):
    entity: NotRequired[str]
    count: NotRequired[int]
    items: NotRequired[list[ReversalDict]]
