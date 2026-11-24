from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item import Item, ItemDict


class V1BestOfferPricesResponse(SdkBaseModel):
    items: Optional[list[Item]] = UNSET
    request_id: Optional[str] = Field(default=UNSET, alias="requestId")


class V1BestOfferPricesResponseDict(TypedDict):
    items: NotRequired[list[ItemDict]]
    request_id: NotRequired[str]
