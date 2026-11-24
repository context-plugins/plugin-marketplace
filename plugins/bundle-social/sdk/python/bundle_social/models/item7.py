from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Item7(SdkBaseModel):
    location_id: str = Field(alias="locationId")
    """Location tag ID to pass as data.TIKTOK.locationId."""

    name: str
    """Location name to pass as data.TIKTOK.locationName."""

    address: OptionalNullable[str] = UNSET
    """Extra location details. Can be a country, a region, a city or a full street address."""


class Item7Dict(TypedDict):
    location_id: str
    name: str
    address: NotRequired[str | None]
