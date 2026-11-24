from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .loa import Loa, LoaDict


class DescribeConnectionLoaResponse(SdkBaseModel):
    loa: Optional[Loa] = UNSET


class DescribeConnectionLoaResponseDict(TypedDict):
    loa: NotRequired[LoaDict]
