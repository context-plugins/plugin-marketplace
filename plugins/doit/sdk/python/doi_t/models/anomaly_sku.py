from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AnomalySku(SdkBaseModel):
    """SKU-level information contributing to an anomaly."""

    cost: Optional[float] = UNSET
    name: Optional[str] = UNSET


class AnomalySkuDict(TypedDict):
    cost: NotRequired[float]
    name: NotRequired[str]
