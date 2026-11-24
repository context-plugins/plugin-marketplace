from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error7 import Error7, Error7Dict


class QueueLimitError(SdkBaseModel):
    success: bool
    error: Error7


class QueueLimitErrorDict(TypedDict):
    success: bool
    error: Error7Dict
