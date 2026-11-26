from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.blocked2 import Blocked2OrStr


class Vendor(SdkBaseModel):
    odata_etag: Optional[str] = Field(default=UNSET, alias="@odata.etag")
    id: Optional[UUID] = UNSET
    """The unique identifier of the vendor"""

    number: Optional[str] = UNSET
    """The vendor number"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The vendor display name"""

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

    tax_registration_number: Optional[str] = Field(default=UNSET, alias="taxRegistrationNumber")
    """The tax registration number"""

    currency_id: Optional[UUID] = Field(default=UNSET, alias="currencyId")
    """The currency ID"""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """The currency code"""

    payment_terms_id: Optional[UUID] = Field(default=UNSET, alias="paymentTermsId")
    """The payment terms ID"""

    payment_method_id: Optional[UUID] = Field(default=UNSET, alias="paymentMethodId")
    """The payment method ID"""

    tax_liable: Optional[bool] = Field(default=UNSET, alias="taxLiable")
    """Whether the vendor is tax liable"""

    blocked: Optional[Blocked2OrStr] = UNSET
    """Whether the vendor is blocked"""

    balance: Optional[float] = UNSET
    """The vendor balance"""

    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")


class VendorDict(TypedDict):
    odata_etag: NotRequired[str]
    id: NotRequired[UUID]
    number: NotRequired[str]
    display_name: NotRequired[str]
    address_line1: NotRequired[str]
    address_line2: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    postal_code: NotRequired[str]
    phone_number: NotRequired[str]
    email: NotRequired[str]
    website: NotRequired[str]
    tax_registration_number: NotRequired[str]
    currency_id: NotRequired[UUID]
    currency_code: NotRequired[str]
    payment_terms_id: NotRequired[UUID]
    payment_method_id: NotRequired[UUID]
    tax_liable: NotRequired[bool]
    blocked: NotRequired[Blocked2OrStr]
    balance: NotRequired[float]
    last_modified_date_time: NotRequired[RFC3339DateTime]
