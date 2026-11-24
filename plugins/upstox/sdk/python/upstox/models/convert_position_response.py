from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .convert_position_data2 import ConvertPositionData2, ConvertPositionData2Dict
from .enums.status import StatusOrStr
from .problem import Problem, ProblemDict


class ConvertPositionResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[ConvertPositionData2] = UNSET
    """Response data for convert position request"""

    errors: Optional[list[Problem]] = UNSET
    """Error details for convert position request"""


class ConvertPositionResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[ConvertPositionData2Dict]
    errors: NotRequired[list[ProblemDict]]
