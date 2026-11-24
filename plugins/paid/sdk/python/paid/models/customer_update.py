from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .address import Address, AddressDict
from .enums.creation_source import CreationSourceOrStr
from .enums.tax_exempt_status import TaxExemptStatusOrStr


class CustomerUpdate(SdkBaseModel):
    name: Optional[str] = UNSET
    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    phone: Optional[str] = UNSET
    employee_count: Optional[float] = Field(default=UNSET, alias="employeeCount")
    annual_revenue: Optional[float] = Field(default=UNSET, alias="annualRevenue")
    tax_exempt_status: Optional[TaxExemptStatusOrStr] = Field(default=UNSET, alias="taxExemptStatus")
    creation_source: Optional[CreationSourceOrStr] = Field(default=UNSET, alias="creationSource")
    website: Optional[str] = UNSET
    billing_address: Optional[Address] = Field(default=UNSET, alias="billingAddress")
    metadata: Optional[Any] = UNSET
    """Flexible JSON field for storing custom metadata about the customer"""


class CustomerUpdateDict(TypedDict):
    name: NotRequired[str]
    external_id: NotRequired[str]
    phone: NotRequired[str]
    employee_count: NotRequired[float]
    annual_revenue: NotRequired[float]
    tax_exempt_status: NotRequired[TaxExemptStatusOrStr]
    creation_source: NotRequired[CreationSourceOrStr]
    website: NotRequired[str]
    billing_address: NotRequired[AddressDict]
    metadata: NotRequired[Any]
