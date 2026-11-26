from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.blocked import BlockedOrStr
from .enums.type_dynamics365_business_central_api_v20_customers_api import (
    TypeDynamics365BusinessCentralApiV20CustomersApiOrStr,
)


class Customer(SdkBaseModel):
    odata_etag: Optional[str] = Field(default=UNSET, alias="@odata.etag")
    """ETag for concurrency control"""

    id: Optional[UUID] = UNSET
    """The unique identifier of the customer"""

    number: Optional[str] = UNSET
    """The customer number"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The customer display name"""

    type_: Optional[TypeDynamics365BusinessCentralApiV20CustomersApiOrStr] = Field(default=UNSET, alias="type")
    """The customer type"""

    address_line1: Optional[str] = Field(default=UNSET, alias="addressLine1")
    """First line of the address"""

    address_line2: Optional[str] = Field(default=UNSET, alias="addressLine2")
    """Second line of the address"""

    city: Optional[str] = UNSET
    """The city"""

    state: Optional[str] = UNSET
    """The state or province code"""

    country: Optional[str] = UNSET
    """The country/region code"""

    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    """The postal code"""

    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """The phone number"""

    email: Optional[str] = UNSET
    """The email address"""

    website: Optional[str] = UNSET
    """The website URL"""

    salesperson_code: Optional[str] = Field(default=UNSET, alias="salespersonCode")
    """The salesperson code"""

    balance_due: Optional[float] = Field(default=UNSET, alias="balanceDue")
    """The balance due from the customer"""

    credit_limit: Optional[float] = Field(default=UNSET, alias="creditLimit")
    """The credit limit"""

    tax_liable: Optional[bool] = Field(default=UNSET, alias="taxLiable")
    """Whether the customer is tax liable"""

    tax_area_id: Optional[UUID] = Field(default=UNSET, alias="taxAreaId")
    """The tax area ID"""

    tax_area_display_name: Optional[str] = Field(default=UNSET, alias="taxAreaDisplayName")
    """The tax area display name"""

    tax_registration_number: Optional[str] = Field(default=UNSET, alias="taxRegistrationNumber")
    """The tax registration number"""

    currency_id: Optional[UUID] = Field(default=UNSET, alias="currencyId")
    """The currency ID"""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """The currency code"""

    payment_terms_id: Optional[UUID] = Field(default=UNSET, alias="paymentTermsId")
    """The payment terms ID"""

    shipment_method_id: Optional[UUID] = Field(default=UNSET, alias="shipmentMethodId")
    """The shipment method ID"""

    payment_method_id: Optional[UUID] = Field(default=UNSET, alias="paymentMethodId")
    """The payment method ID"""

    blocked: Optional[BlockedOrStr] = UNSET
    """Whether the customer is blocked"""

    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")
    """The date and time when the customer was last modified"""


class CustomerDict(TypedDict):
    odata_etag: NotRequired[str]
    id: NotRequired[UUID]
    number: NotRequired[str]
    display_name: NotRequired[str]
    type_: NotRequired[TypeDynamics365BusinessCentralApiV20CustomersApiOrStr]
    address_line1: NotRequired[str]
    address_line2: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    postal_code: NotRequired[str]
    phone_number: NotRequired[str]
    email: NotRequired[str]
    website: NotRequired[str]
    salesperson_code: NotRequired[str]
    balance_due: NotRequired[float]
    credit_limit: NotRequired[float]
    tax_liable: NotRequired[bool]
    tax_area_id: NotRequired[UUID]
    tax_area_display_name: NotRequired[str]
    tax_registration_number: NotRequired[str]
    currency_id: NotRequired[UUID]
    currency_code: NotRequired[str]
    payment_terms_id: NotRequired[UUID]
    shipment_method_id: NotRequired[UUID]
    payment_method_id: NotRequired[UUID]
    blocked: NotRequired[BlockedOrStr]
    last_modified_date_time: NotRequired[RFC3339DateTime]
