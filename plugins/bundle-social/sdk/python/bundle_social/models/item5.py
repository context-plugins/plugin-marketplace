from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .location import Location, LocationDict


class Item5(SdkBaseModel):
    location_id: str = Field(alias="locationId")
    """Facebook Page ID to pass as data.INSTAGRAM.locationId"""

    name: str
    """Location page name"""

    link: OptionalNullable[str] = UNSET
    """Public Facebook Page link"""

    location: OptionalNullable[Location] = UNSET
    """Physical location metadata"""


class Item5Dict(TypedDict):
    location_id: str
    name: str
    link: NotRequired[str | None]
    location: NotRequired[LocationDict | None]
