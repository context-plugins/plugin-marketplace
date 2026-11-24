from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error1 import Error1, Error1Dict


class IdempotencyConflictErrorError(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error1] = UNSET


class IdempotencyConflictErrorErrorDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error1Dict]
