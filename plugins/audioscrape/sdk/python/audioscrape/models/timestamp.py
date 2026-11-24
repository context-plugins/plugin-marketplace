from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Timestamp(SdkBaseModel):
    end: float
    start: float


class TimestampDict(TypedDict):
    end: float
    start: float
