from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error3 import Error3, Error3Dict


class ValidationErrorError(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error3] = UNSET


class ValidationErrorErrorDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error3Dict]
