from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ImportEstimateResponse(SdkBaseModel):
    """Placeholder size-based estimate, pending calibration from run actuals."""

    seconds: int
    credits: float


class ImportEstimateResponseDict(TypedDict):
    seconds: int
    credits: float
