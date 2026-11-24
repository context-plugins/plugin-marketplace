from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.country_code import CountryCodeOrStr


class BillingAddress2(SdkBaseModel):
    line1: str
    """Address line 1"""

    line2: Optional[str] = UNSET
    """Address line 2"""

    city: str
    """Address city"""

    state_or_province: Optional[str] = Field(default=UNSET, alias="stateOrProvince")
    """State or province"""

    zip_or_postal_code: str = Field(alias="zipOrPostalCode")
    """Zip or postal code"""

    country: CountryCodeOrStr


class BillingAddress2Dict(TypedDict):
    line1: str
    line2: NotRequired[str]
    city: str
    state_or_province: NotRequired[str]
    zip_or_postal_code: str
    country: CountryCodeOrStr
