from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .item1 import Item1, Item1Dict


class V1GrailedListingsResponse(SdkBaseModel):
    keyword: Optional[str] = UNSET
    page: Optional[int] = UNSET
    count: Optional[int] = UNSET
    marketplace: Optional[str] = UNSET
    total_listings: OptionalNullable[int] = Field(default=UNSET, alias="totalListings")
    total_items: Optional[int] = Field(default=UNSET, alias="totalItems")
    has_next_page: Optional[bool] = Field(default=UNSET, alias="hasNextPage")
    scraped_at: Optional[str] = Field(default=UNSET, alias="scrapedAt")
    summary: OptionalNullable[Any] = UNSET
    items: Optional[list[Item1]] = UNSET


class V1GrailedListingsResponseDict(TypedDict):
    keyword: NotRequired[str]
    page: NotRequired[int]
    count: NotRequired[int]
    marketplace: NotRequired[str]
    total_listings: NotRequired[int | None]
    total_items: NotRequired[int]
    has_next_page: NotRequired[bool]
    scraped_at: NotRequired[str]
    summary: NotRequired[Any | None]
    items: NotRequired[list[Item1Dict]]
