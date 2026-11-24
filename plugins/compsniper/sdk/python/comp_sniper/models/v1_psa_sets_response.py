from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .item2 import Item2, Item2Dict


class V1PsaSetsResponse(SdkBaseModel):
    keyword: Optional[str] = UNSET
    marketplace: Optional[str] = UNSET
    game: OptionalNullable[str] = UNSET
    page: Optional[int] = UNSET
    has_next_page: Optional[bool] = Field(default=UNSET, alias="hasNextPage")
    total_results: Optional[int] = Field(default=UNSET, alias="totalResults")
    total_items: Optional[int] = Field(default=UNSET, alias="totalItems")
    items: Optional[list[Item2]] = UNSET


class V1PsaSetsResponseDict(TypedDict):
    keyword: NotRequired[str]
    marketplace: NotRequired[str]
    game: NotRequired[str | None]
    page: NotRequired[int]
    has_next_page: NotRequired[bool]
    total_results: NotRequired[int]
    total_items: NotRequired[int]
    items: NotRequired[list[Item2Dict]]
