from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.buying_format import BuyingFormatOrStr
from .enums.ebay_site import EbaySiteOrStr
from .enums.item_condition import ItemConditionOrStr
from .enums.item_location import ItemLocationOrStr
from .enums.seller_type import SellerTypeOrStr
from .enums.sort_order import SortOrderOrStr
from .unions.aspect_filter import AspectFilter, AspectFilterDict


class BulkSearchOptions(SdkBaseModel):
    """Shared page-one options applied independently to every keyword."""

    model_config = ConfigDict(extra="forbid")

    count: int = 240
    ebay_site: Optional[EbaySiteOrStr] = Field(default=UNSET, alias="ebaySite")
    category_id: Optional[str] = Field(default=UNSET, alias="categoryId")
    sort_order: Optional[SortOrderOrStr] = Field(default=UNSET, alias="sortOrder")
    min_price: Optional[float] = Field(default=UNSET, alias="minPrice")
    max_price: Optional[float] = Field(default=UNSET, alias="maxPrice")
    item_location: Optional[ItemLocationOrStr] = Field(default=UNSET, alias="itemLocation")
    item_condition: Optional[ItemConditionOrStr] = Field(default=UNSET, alias="itemCondition")
    condition_id: Optional[int] = Field(default=UNSET, alias="conditionId")
    buying_format: Optional[BuyingFormatOrStr] = Field(default=UNSET, alias="buyingFormat")
    seller_type: Optional[SellerTypeOrStr] = Field(default=UNSET, alias="sellerType")
    include_complete_listing: Optional[bool] = Field(default=UNSET, alias="includeCompleteListing")
    sold: bool = True
    sold_after: Optional[Date] = Field(default=UNSET, alias="soldAfter")
    sold_before: Optional[Date] = Field(default=UNSET, alias="soldBefore")
    exact_match: bool = Field(default=False, alias="exactMatch")
    aspect_filter: Optional[dict[str, AspectFilter]] = Field(default=UNSET, alias="aspectFilter")
    relevance: bool = True


class BulkSearchOptionsDict(TypedDict):
    count: NotRequired[int]
    ebay_site: NotRequired[EbaySiteOrStr]
    category_id: NotRequired[str]
    sort_order: NotRequired[SortOrderOrStr]
    min_price: NotRequired[float]
    max_price: NotRequired[float]
    item_location: NotRequired[ItemLocationOrStr]
    item_condition: NotRequired[ItemConditionOrStr]
    condition_id: NotRequired[int]
    buying_format: NotRequired[BuyingFormatOrStr]
    seller_type: NotRequired[SellerTypeOrStr]
    include_complete_listing: NotRequired[bool]
    sold: NotRequired[bool]
    sold_after: NotRequired[Date]
    sold_before: NotRequired[Date]
    exact_match: NotRequired[bool]
    aspect_filter: NotRequired[dict[str, AspectFilterDict]]
    relevance: NotRequired[bool]
