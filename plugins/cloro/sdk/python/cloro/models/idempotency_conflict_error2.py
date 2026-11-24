from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error9 import Error9, Error9Dict


class IdempotencyConflictError2(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error9] = UNSET


class IdempotencyConflictError2Dict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error9Dict]
