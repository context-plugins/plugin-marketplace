from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data3 import Data3, Data3Dict


class V1RecallsBatchResultsResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[Data3] = UNSET


class V1RecallsBatchResultsResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[Data3Dict]
