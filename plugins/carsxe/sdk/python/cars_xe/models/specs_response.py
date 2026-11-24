from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .color import Color, ColorDict
from .warranty import Warranty, WarrantyDict


class SpecsResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    input: Optional[Any] = UNSET
    """Echo of the input parameters specified by the query."""

    timestamp: Optional[str] = UNSET
    attributes: Optional[Any] = UNSET
    """A map of specifications about the VIN (year, make, model, trim, style, type, size, category, made_in, doors,
    fuel_type, engine, transmission, drivetrain, dimensions, pricing and more)."""

    colors: Optional[list[Color]] = UNSET
    """Available color options based on the vehicle's year, make and model."""

    equipment: Optional[Any] = UNSET
    """Equipment details based on the vehicle's year, make and model."""

    warranties: Optional[list[Warranty]] = UNSET
    """Standard vehicle warranties by type, miles and months."""

    deepdata: Optional[Any] = UNSET
    """More information on the vehicle from the deep data search (present when ``deepdata=1``)."""


class SpecsResponseDict(TypedDict):
    success: NotRequired[bool]
    input: NotRequired[Any]
    timestamp: NotRequired[str]
    attributes: NotRequired[Any]
    colors: NotRequired[list[ColorDict]]
    equipment: NotRequired[Any]
    warranties: NotRequired[list[WarrantyDict]]
    deepdata: NotRequired[Any]
