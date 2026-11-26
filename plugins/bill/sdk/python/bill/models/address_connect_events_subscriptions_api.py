from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AddressConnectEventsSubscriptionsApi(SdkBaseModel):
    """Vendor address information."""

    line1: Optional[str] = UNSET
    line2: Optional[str] = UNSET
    city: Optional[str] = UNSET
    state_or_province: Optional[str] = Field(default=UNSET, alias="stateOrProvince")
    zip_or_postal_code: Optional[str] = Field(default=UNSET, alias="zipOrPostalCode")
    country: Optional[str] = UNSET


class AddressConnectEventsSubscriptionsApiDict(TypedDict):
    line1: NotRequired[str]
    line2: NotRequired[str]
    city: NotRequired[str]
    state_or_province: NotRequired[str]
    zip_or_postal_code: NotRequired[str]
    country: NotRequired[str]
