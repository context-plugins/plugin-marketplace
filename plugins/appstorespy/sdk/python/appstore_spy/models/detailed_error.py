from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.value import Value, ValueDict


class DetailedError(SdkBaseModel):
    location: str
    message: str
    value: Optional[Value] = UNSET


class DetailedErrorDict(TypedDict):
    location: str
    message: str
    value: NotRequired[ValueDict]
