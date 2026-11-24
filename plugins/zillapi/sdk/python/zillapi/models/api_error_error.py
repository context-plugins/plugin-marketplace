from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict


class ApiErrorError(SdkBaseModel):
    error: Optional[Error] = UNSET


class ApiErrorErrorDict(TypedDict):
    error: NotRequired[ErrorDict]
