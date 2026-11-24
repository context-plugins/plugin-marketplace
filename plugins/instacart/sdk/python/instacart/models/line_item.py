from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filters import Filters, FiltersDict
from .line_item_measurements import LineItemMeasurements, LineItemMeasurementsDict


class LineItem(SdkBaseModel):
    name: str
    """The name of the product."""

    quantity: Optional[float] = UNSET
    """The quantity of the product to add."""

    unit: Optional[str] = UNSET
    """The unit of measurement for the quantity."""

    display_text: Optional[str] = UNSET
    """Custom display text for the line item on the page."""

    product_ids: Optional[list[str]] = UNSET
    """Instacart product identifiers to match specific products."""

    upcs: Optional[list[str]] = UNSET
    """Universal Product Codes to match specific products."""

    line_item_measurements: Optional[LineItemMeasurements] = UNSET
    """Measurement details for the line item."""

    filters: Optional[Filters] = UNSET
    """Filters to narrow product matching."""


class LineItemDict(TypedDict):
    name: str
    quantity: NotRequired[float]
    unit: NotRequired[str]
    display_text: NotRequired[str]
    product_ids: NotRequired[list[str]]
    upcs: NotRequired[list[str]]
    line_item_measurements: NotRequired[LineItemMeasurementsDict]
    filters: NotRequired[FiltersDict]
