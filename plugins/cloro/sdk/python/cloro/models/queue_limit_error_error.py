from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error7 import Error7, Error7Dict


class QueueLimitErrorError(SdkBaseModel):
    success: bool
    error: Error7


class QueueLimitErrorErrorDict(TypedDict):
    success: bool
    error: Error7Dict
