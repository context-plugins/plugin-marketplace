from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error5 import Error5, Error5Dict


class InternalErrorError(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error5] = UNSET


class InternalErrorErrorDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error5Dict]
