from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .category import Category, CategoryDict
from .links_enrich_api import LinksEnrichApi, LinksEnrichApiDict
from .location import Location, LocationDict
from .merchant import Merchant, MerchantDict


class SingleMerchantResponse(SdkBaseModel):
    source: Optional[str] = UNSET
    merchant: Optional[Merchant] = UNSET
    category: Optional[Category] = UNSET
    location: Optional[Location] = UNSET
    links: Optional[LinksEnrichApi] = UNSET


class SingleMerchantResponseDict(TypedDict):
    source: NotRequired[str]
    merchant: NotRequired[MerchantDict]
    category: NotRequired[CategoryDict]
    location: NotRequired[LocationDict]
    links: NotRequired[LinksEnrichApiDict]
