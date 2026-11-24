from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result_cars_xe_recognition_api import ResultCarsXeRecognitionApi, ResultCarsXeRecognitionApiDict


class PlaterecognitionResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    message: Optional[str] = UNSET
    results: Optional[list[ResultCarsXeRecognitionApi]] = UNSET
    processing_time: Optional[float] = UNSET


class PlaterecognitionResponseDict(TypedDict):
    success: NotRequired[bool]
    message: NotRequired[str]
    results: NotRequired[list[ResultCarsXeRecognitionApiDict]]
    processing_time: NotRequired[float]
