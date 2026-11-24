from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .customer_billing_address_response import CustomerBillingAddressResponse, CustomerBillingAddressResponseDict


class CustomerStateCustomer(SdkBaseModel):
    id: str
    """Stable Paid customer display ID. Use this value as the ``{id}`` path parameter for customer routes, for example
    ``GET /api/v2/customers/cus_abc123/state``."""

    name: str
    external_id: str | None = Field(alias="externalId")
    billing_address: CustomerBillingAddressResponse = Field(alias="billingAddress")
    """Customer billing address, or null when no address is set."""


class CustomerStateCustomerDict(TypedDict):
    id: str
    name: str
    external_id: str | None
    billing_address: CustomerBillingAddressResponseDict
