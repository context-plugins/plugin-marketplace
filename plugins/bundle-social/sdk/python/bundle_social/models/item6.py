from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .location1 import Location1, Location1Dict


class Item6(SdkBaseModel):
    page_id: str = Field(alias="pageId")
    """Facebook Page ID to use in a Page mention token"""

    name: str
    """Facebook Page name"""

    link: OptionalNullable[str] = UNSET
    """Public Facebook Page link"""

    location: OptionalNullable[Location1] = UNSET
    """Physical location metadata when the Page represents a place"""


class Item6Dict(TypedDict):
    page_id: str
    name: str
    link: NotRequired[str | None]
    location: NotRequired[Location1Dict | None]
