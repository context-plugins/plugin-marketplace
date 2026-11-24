from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.delivery import Delivery, DeliveryOrStr
from .enums.ebay_site import EbaySite, EbaySiteOrStr
from .enums.item_condition import ItemConditionOrStr
from .enums.seller_type import SellerTypeOrStr
from .enums.sort_order import SortOrderOrStr
from .unions.aspect_filter import AspectFilter, AspectFilterDict


class MaxSearchRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    keyword: str
    max_pages: int = Field(default=10, alias="maxPages")
    delivery: DeliveryOrStr = Delivery.INLINE
    count: int = 240
    ebay_site: EbaySiteOrStr = Field(default=EbaySite.EBAY_COM, alias="ebaySite")
    category_id: Optional[str] = Field(default=UNSET, alias="categoryId")
    sort_order: Optional[SortOrderOrStr] = Field(default=UNSET, alias="sortOrder")
    min_price: Optional[float] = Field(default=UNSET, alias="minPrice")
    max_price: Optional[float] = Field(default=UNSET, alias="maxPrice")
    item_condition: Optional[ItemConditionOrStr] = Field(default=UNSET, alias="itemCondition")
    condition_id: Optional[int] = Field(default=UNSET, alias="conditionId")
    seller_type: Optional[SellerTypeOrStr] = Field(default=UNSET, alias="sellerType")
    sold: bool = True
    exact_match: bool = Field(default=False, alias="exactMatch")
    aspect_filter: Optional[dict[str, AspectFilter]] = Field(default=UNSET, alias="aspectFilter")


class MaxSearchRequestDict(TypedDict):
    keyword: str
    max_pages: NotRequired[int]
    delivery: NotRequired[DeliveryOrStr]
    count: NotRequired[int]
    ebay_site: NotRequired[EbaySiteOrStr]
    category_id: NotRequired[str]
    sort_order: NotRequired[SortOrderOrStr]
    min_price: NotRequired[float]
    max_price: NotRequired[float]
    item_condition: NotRequired[ItemConditionOrStr]
    condition_id: NotRequired[int]
    seller_type: NotRequired[SellerTypeOrStr]
    sold: NotRequired[bool]
    exact_match: NotRequired[bool]
    aspect_filter: NotRequired[dict[str, AspectFilterDict]]
