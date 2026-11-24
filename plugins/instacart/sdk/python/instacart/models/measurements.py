from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Measurements(SdkBaseModel):
    """Measurement details for the ingredient."""

    amount: Optional[float] = UNSET
    """The measurement amount."""

    unit: Optional[str] = UNSET
    """The measurement unit."""


class MeasurementsDict(TypedDict):
    amount: NotRequired[float]
    unit: NotRequired[str]
