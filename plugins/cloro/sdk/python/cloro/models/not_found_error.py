from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error8 import Error8, Error8Dict


class NotFoundError(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error8] = UNSET


class NotFoundErrorDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error8Dict]
