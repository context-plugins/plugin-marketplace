from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class BuildingUnit(SdkBaseModel):
    zpid: Optional[str] = UNSET
    """Zillow property id, always a string."""

    unit_number: OptionalNullable[str] = Field(default=UNSET, alias="unitNumber")
    """Absent on the building's parent record."""

    price: OptionalNullable[float] = UNSET
    beds: OptionalNullable[float] = UNSET
    baths: OptionalNullable[float] = UNSET


class BuildingUnitDict(TypedDict):
    zpid: NotRequired[str]
    unit_number: NotRequired[str | None]
    price: NotRequired[float | None]
    beds: NotRequired[float | None]
    baths: NotRequired[float | None]
