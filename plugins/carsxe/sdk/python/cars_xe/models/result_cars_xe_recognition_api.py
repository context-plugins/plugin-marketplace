from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResultCarsXeRecognitionApi(SdkBaseModel):
    plate: Optional[str] = UNSET
    box: Optional[Any] = UNSET
    region: Optional[Any] = UNSET


class ResultCarsXeRecognitionApiDict(TypedDict):
    plate: NotRequired[str]
    box: NotRequired[Any]
    region: NotRequired[Any]
