from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Item1CompSniperMarketplaceAndShippingPsaApi(SdkBaseModel):
    sale_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="saleDate")
    sale_price: Optional[float] = Field(default=UNSET, alias="salePrice")
    sale_type: Optional[str] = Field(default=UNSET, alias="saleType")
    grading_company: Optional[str] = Field(default=UNSET, alias="gradingCompany")
    grade: OptionalNullable[str] = UNSET
    cert_number: OptionalNullable[str] = Field(default=UNSET, alias="certNumber")
    url: OptionalNullable[str] = UNSET


class Item1CompSniperMarketplaceAndShippingPsaApiDict(TypedDict):
    sale_date: NotRequired[RFC3339DateTime]
    sale_price: NotRequired[float]
    sale_type: NotRequired[str]
    grading_company: NotRequired[str]
    grade: NotRequired[str | None]
    cert_number: NotRequired[str | None]
    url: NotRequired[str | None]
