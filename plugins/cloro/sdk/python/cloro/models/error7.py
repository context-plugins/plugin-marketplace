from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .details2 import Details2, Details2Dict


class Error7(SdkBaseModel):
    code: Literal["QUEUE_LIMIT_EXCEEDED"] = "QUEUE_LIMIT_EXCEEDED"
    message: str
    details: Optional[Details2] = UNSET
    timestamp: RFC3339DateTime


class Error7Dict(TypedDict):
    code: Literal["QUEUE_LIMIT_EXCEEDED"]
    message: str
    details: NotRequired[Details2Dict]
    timestamp: RFC3339DateTime
