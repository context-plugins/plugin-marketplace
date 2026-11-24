from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data2 import Data2, Data2Dict


class V1RecallsBatchStatusResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[Data2] = UNSET


class V1RecallsBatchStatusResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[Data2Dict]
