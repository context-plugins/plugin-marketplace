from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data import Data, DataDict


class V1AccountResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[Data] = UNSET


class V1AccountResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[DataDict]
