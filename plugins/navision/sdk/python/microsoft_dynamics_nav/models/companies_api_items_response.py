from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item import Item, ItemDict


class CompaniesApiItemsResponse(SdkBaseModel):
    value: Optional[list[Item]] = UNSET


class CompaniesApiItemsResponseDict(TypedDict):
    value: NotRequired[list[ItemDict]]
