from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1 import Data1, Data1Dict


class V1RecallsBatchSubmitResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[Data1] = UNSET
    message: Optional[str] = UNSET


class V1RecallsBatchSubmitResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[Data1Dict]
    message: NotRequired[str]
