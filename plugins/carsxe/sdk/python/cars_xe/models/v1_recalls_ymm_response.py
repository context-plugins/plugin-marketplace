from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data import Data, DataDict
from .input_cars_xe_recalls_api import InputCarsXeRecallsApi, InputCarsXeRecallsApiDict


class V1RecallsYmmResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    input: Optional[InputCarsXeRecallsApi] = UNSET
    data: Optional[Data] = UNSET
    timestamp: Optional[str] = UNSET


class V1RecallsYmmResponseDict(TypedDict):
    success: NotRequired[bool]
    input: NotRequired[InputCarsXeRecallsApiDict]
    data: NotRequired[DataDict]
    timestamp: NotRequired[str]
