from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_dynamics365_business_central_api_v20_sales_orders_api import (
    StatusDynamics365BusinessCentralApiV20SalesOrdersApiOrStr,
)
from .sales_order_line import SalesOrderLine, SalesOrderLineDict


class SalesOrder(SdkBaseModel):
    odata_etag: Optional[str] = Field(default=UNSET, alias="@odata.etag")
    id: Optional[UUID] = UNSET
    """The unique identifier of the sales order"""

    number: Optional[str] = UNSET
    """The sales order number"""

    external_document_number: Optional[str] = Field(default=UNSET, alias="externalDocumentNumber")
    """The external document number"""

    order_date: Optional[Date] = Field(default=UNSET, alias="orderDate")
    """The order date"""

    posting_date: Optional[Date] = Field(default=UNSET, alias="postingDate")
    """The posting date"""

    customer_id: Optional[UUID] = Field(default=UNSET, alias="customerId")
    """The customer ID"""

    customer_number: Optional[str] = Field(default=UNSET, alias="customerNumber")
    """The customer number"""

    customer_name: Optional[str] = Field(default=UNSET, alias="customerName")
    """The customer name"""

    bill_to_name: Optional[str] = Field(default=UNSET, alias="billToName")
    """The bill-to name"""

    bill_to_customer_id: Optional[UUID] = Field(default=UNSET, alias="billToCustomerId")
    """The bill-to customer ID"""

    bill_to_customer_number: Optional[str] = Field(default=UNSET, alias="billToCustomerNumber")
    """The bill-to customer number"""

    ship_to_name: Optional[str] = Field(default=UNSET, alias="shipToName")
    """The ship-to name"""

    ship_to_contact: Optional[str] = Field(default=UNSET, alias="shipToContact")
    """The ship-to contact"""

    sell_to_address_line1: Optional[str] = Field(default=UNSET, alias="sellToAddressLine1")
    sell_to_address_line2: Optional[str] = Field(default=UNSET, alias="sellToAddressLine2")
    sell_to_city: Optional[str] = Field(default=UNSET, alias="sellToCity")
    sell_to_country: Optional[str] = Field(default=UNSET, alias="sellToCountry")
    sell_to_state: Optional[str] = Field(default=UNSET, alias="sellToState")
    sell_to_post_code: Optional[str] = Field(default=UNSET, alias="sellToPostCode")
    currency_id: Optional[UUID] = Field(default=UNSET, alias="currencyId")
    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    prices_include_tax: Optional[bool] = Field(default=UNSET, alias="pricesIncludeTax")
    payment_terms_id: Optional[UUID] = Field(default=UNSET, alias="paymentTermsId")
    shipment_method_id: Optional[UUID] = Field(default=UNSET, alias="shipmentMethodId")
    salesperson: Optional[str] = UNSET
    requested_delivery_date: Optional[Date] = Field(default=UNSET, alias="requestedDeliveryDate")
    discount_amount: Optional[float] = Field(default=UNSET, alias="discountAmount")
    """The total discount amount"""

    discount_applied_before_tax: Optional[bool] = Field(default=UNSET, alias="discountAppliedBeforeTax")
    total_amount_excluding_tax: Optional[float] = Field(default=UNSET, alias="totalAmountExcludingTax")
    total_tax_amount: Optional[float] = Field(default=UNSET, alias="totalTaxAmount")
    total_amount_including_tax: Optional[float] = Field(default=UNSET, alias="totalAmountIncludingTax")
    fully_shipped: Optional[bool] = Field(default=UNSET, alias="fullyShipped")
    status: Optional[StatusDynamics365BusinessCentralApiV20SalesOrdersApiOrStr] = UNSET
    """The order status"""

    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")
    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    email: Optional[str] = UNSET
    sales_order_lines: Optional[list[SalesOrderLine]] = Field(default=UNSET, alias="salesOrderLines")


class SalesOrderDict(TypedDict):
    odata_etag: NotRequired[str]
    id: NotRequired[UUID]
    number: NotRequired[str]
    external_document_number: NotRequired[str]
    order_date: NotRequired[Date]
    posting_date: NotRequired[Date]
    customer_id: NotRequired[UUID]
    customer_number: NotRequired[str]
    customer_name: NotRequired[str]
    bill_to_name: NotRequired[str]
    bill_to_customer_id: NotRequired[UUID]
    bill_to_customer_number: NotRequired[str]
    ship_to_name: NotRequired[str]
    ship_to_contact: NotRequired[str]
    sell_to_address_line1: NotRequired[str]
    sell_to_address_line2: NotRequired[str]
    sell_to_city: NotRequired[str]
    sell_to_country: NotRequired[str]
    sell_to_state: NotRequired[str]
    sell_to_post_code: NotRequired[str]
    currency_id: NotRequired[UUID]
    currency_code: NotRequired[str]
    prices_include_tax: NotRequired[bool]
    payment_terms_id: NotRequired[UUID]
    shipment_method_id: NotRequired[UUID]
    salesperson: NotRequired[str]
    requested_delivery_date: NotRequired[Date]
    discount_amount: NotRequired[float]
    discount_applied_before_tax: NotRequired[bool]
    total_amount_excluding_tax: NotRequired[float]
    total_tax_amount: NotRequired[float]
    total_amount_including_tax: NotRequired[float]
    fully_shipped: NotRequired[bool]
    status: NotRequired[StatusDynamics365BusinessCentralApiV20SalesOrdersApiOrStr]
    last_modified_date_time: NotRequired[RFC3339DateTime]
    phone_number: NotRequired[str]
    email: NotRequired[str]
    sales_order_lines: NotRequired[list[SalesOrderLineDict]]
