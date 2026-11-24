from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data import Data, DataDict


class AccountCreditsResponse(SdkBaseModel):
    data: Optional[Data] = UNSET


class AccountCreditsResponseDict(TypedDict):
    data: NotRequired[DataDict]
