from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .problem import Problem, ProblemDict


class ApiGatewayErrorResponseError(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    errors: Optional[list[Problem]] = UNSET


class ApiGatewayErrorResponseErrorDict(TypedDict):
    status: NotRequired[StatusOrStr]
    errors: NotRequired[list[ProblemDict]]
