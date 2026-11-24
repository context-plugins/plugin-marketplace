from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict


class ApiErrorModel(SdkBaseModel):
    error: Optional[Error] = UNSET


class ApiErrorModelDict(TypedDict):
    error: NotRequired[ErrorDict]
