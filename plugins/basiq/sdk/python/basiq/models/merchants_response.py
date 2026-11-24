from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .links2 import Links2, Links2Dict
from .merchant_details import MerchantDetails, MerchantDetailsDict


class MerchantsResponse(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always 'list'."""

    size: int
    """The number of merchants returned."""

    data: list[MerchantDetails]
    """Array of merchant objects."""

    links: Links2


class MerchantsResponseDict(TypedDict):
    type_: str
    size: int
    data: list[MerchantDetailsDict]
    links: Links2Dict
