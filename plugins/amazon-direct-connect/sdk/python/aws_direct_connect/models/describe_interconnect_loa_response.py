from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .loa import Loa, LoaDict


class DescribeInterconnectLoaResponse(SdkBaseModel):
    loa: Optional[Loa] = UNSET


class DescribeInterconnectLoaResponseDict(TypedDict):
    loa: NotRequired[LoaDict]
