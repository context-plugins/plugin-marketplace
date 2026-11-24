from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filters1 import Filters1, Filters1Dict
from .measurements import Measurements, MeasurementsDict


class Ingredient(SdkBaseModel):
    name: str
    """The name of the ingredient."""

    display_text: Optional[str] = UNSET
    """Custom display text for the ingredient on the recipe page."""

    product_ids: Optional[list[str]] = UNSET
    """Instacart product identifiers to match specific products."""

    upcs: Optional[list[str]] = UNSET
    """Universal Product Codes to match specific products."""

    measurements: Optional[Measurements] = UNSET
    """Measurement details for the ingredient."""

    filters: Optional[Filters1] = UNSET
    """Filters to narrow product matching for this ingredient."""


class IngredientDict(TypedDict):
    name: str
    display_text: NotRequired[str]
    product_ids: NotRequired[list[str]]
    upcs: NotRequired[list[str]]
    measurements: NotRequired[MeasurementsDict]
    filters: NotRequired[Filters1Dict]
