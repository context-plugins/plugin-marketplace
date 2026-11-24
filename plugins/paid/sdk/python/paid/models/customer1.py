from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .customer_billing_address_response import CustomerBillingAddressResponse, CustomerBillingAddressResponseDict
from .customer_connections import CustomerConnections, CustomerConnectionsDict
from .enums.customer_creation_state import CustomerCreationStateOrStr
from .enums.customer_status import CustomerStatusOrStr


class Customer1(SdkBaseModel):
    id: str
    """Stable Paid customer display ID. Use this value as the ``{id}`` path parameter for customer routes, for example
    ``GET /api/v2/customers/cus_abc123/state``."""

    name: str
    legal_name: str | None = Field(alias="legalName")
    email: str
    phone: str
    website: str
    external_id: str | None = Field(alias="externalId")
    billing_address: CustomerBillingAddressResponse = Field(alias="billingAddress")
    """Customer billing address, or null when no address is set."""

    creation_state: CustomerCreationStateOrStr = Field(alias="creationState")
    status: CustomerStatusOrStr
    """Customer status: churned when the customer is marked as churned, active otherwise."""

    churn_date: RFC3339DateTime | None = Field(alias="churnDate")
    vat_number: str | None = Field(alias="vatNumber")
    metadata: dict[str, Any] | None
    default_currency: str = Field(alias="defaultCurrency")
    """ISO 4217 currency code, for example USD, EUR, or GBP."""

    connections: CustomerConnections
    """Linked external system IDs for this customer."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class Customer1Dict(TypedDict):
    id: str
    name: str
    legal_name: str | None
    email: str
    phone: str
    website: str
    external_id: str | None
    billing_address: CustomerBillingAddressResponseDict
    creation_state: CustomerCreationStateOrStr
    status: CustomerStatusOrStr
    churn_date: RFC3339DateTime | None
    vat_number: str | None
    metadata: dict[str, Any] | None
    default_currency: str
    connections: CustomerConnectionsDict
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
