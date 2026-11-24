from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InsightBreakdownRow(SdkBaseModel):
    key: str
    label: str
    count: int
    pct: float


class InsightBreakdownRowDict(TypedDict):
    key: str
    label: str
    count: int
    pct: float
