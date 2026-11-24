from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MerchantLocation(SdkBaseModel):
    city: Optional[str] = UNSET
    """Merchant city"""

    state: Optional[str] = UNSET
    """Merchant state or region"""

    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    """Merchant zip or postal code"""

    country: Optional[str] = UNSET
    """Merchant country"""


class MerchantLocationDict(TypedDict):
    city: NotRequired[str]
    state: NotRequired[str]
    postal_code: NotRequired[str]
    country: NotRequired[str]
