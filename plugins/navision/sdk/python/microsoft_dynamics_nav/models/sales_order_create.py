from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class SalesOrderCreate(SdkBaseModel):
    external_document_number: Optional[str] = Field(default=UNSET, alias="externalDocumentNumber")
    order_date: Optional[Date] = Field(default=UNSET, alias="orderDate")
    customer_id: Optional[UUID] = Field(default=UNSET, alias="customerId")
    customer_number: Optional[str] = Field(default=UNSET, alias="customerNumber")
    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    prices_include_tax: Optional[bool] = Field(default=UNSET, alias="pricesIncludeTax")
    requested_delivery_date: Optional[Date] = Field(default=UNSET, alias="requestedDeliveryDate")


class SalesOrderCreateDict(TypedDict):
    external_document_number: NotRequired[str]
    order_date: NotRequired[Date]
    customer_id: NotRequired[UUID]
    customer_number: NotRequired[str]
    currency_code: NotRequired[str]
    prices_include_tax: NotRequired[bool]
    requested_delivery_date: NotRequired[Date]
