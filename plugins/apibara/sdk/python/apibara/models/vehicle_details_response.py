from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vehicle import Vehicle, VehicleDict


class VehicleDetailsResponse(SdkBaseModel):
    data: Optional[Vehicle] = UNSET
    """Normalized Copart or IAAI auction vehicle record."""


class VehicleDetailsResponseDict(TypedDict):
    data: NotRequired[VehicleDict]
