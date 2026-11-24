from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InputCarsXeRecallsApi(SdkBaseModel):
    year: Optional[str] = UNSET
    make: Optional[str] = UNSET
    model: Optional[str] = UNSET


class InputCarsXeRecallsApiDict(TypedDict):
    year: NotRequired[str]
    make: NotRequired[str]
    model: NotRequired[str]
