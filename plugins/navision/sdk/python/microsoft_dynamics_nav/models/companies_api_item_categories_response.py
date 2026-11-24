from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item_category import ItemCategory, ItemCategoryDict


class CompaniesApiItemCategoriesResponse(SdkBaseModel):
    value: Optional[list[ItemCategory]] = UNSET


class CompaniesApiItemCategoriesResponseDict(TypedDict):
    value: NotRequired[list[ItemCategoryDict]]
