from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LineItemMeasurements(SdkBaseModel):
    """Measurement details for the line item."""

    amount: Optional[float] = UNSET
    """The measurement amount."""

    unit: Optional[str] = UNSET
    """The measurement unit."""


class LineItemMeasurementsDict(TypedDict):
    amount: NotRequired[float]
    unit: NotRequired[str]
